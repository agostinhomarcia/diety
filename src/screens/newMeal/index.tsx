import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  Content,
  DateBox,
  Label,
  SelectedBox,
  TextArea,
  TextAreaContainer,
} from "./styles";

import { Layout } from "@components/Layout";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { SelectButton } from "@components/SelectButton";

import uuid from "react-native-uuid";

import { createMeal } from "@storage/meals/createMeal";

import { useNavigation } from "@react-navigation/native";
import { dateMask, hourMask } from "@utils/inputMask";

export function NewMeal() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [isOnTheDiet, setIsOnTheDiet] = useState(true);

  const [showDatePicker, setShowDatePicker] = useState(false);
  function onDateChange(event: any, selectedDate?: Date) {
    setShowDatePicker(false);
    if (selectedDate) {
      const currentDate = selectedDate || new Date();
      const formattedDate = currentDate.toLocaleDateString("pt-BR");
      setDate(formattedDate);
    }
  }

  async function handleRegisterNewMeal() {
    try {
      if (!name.trim() && !date.trim() && !hour.trim()) {
        return Alert.alert(
          "Nova refeição",
          "Por favor, preencha todos os campos."
        );
      }

      if (date.trim().length !== 10) {
        return Alert.alert(
          "Nova refeição",
          "Por favor, digite uma data válida."
        );
      }

      if (hour.trim().length !== 5) {
        return Alert.alert(
          "Nova refeição",
          "Por favor, digite uma hora válida."
        );
      }

      const newMeal = {
        id: String(uuid.v4()),
        name,
        description,
        date,
        hour,
        isOnTheDiet,
      };

      await createMeal(newMeal);
      navigation.navigate("feedback", { isOnTheDiet });
    } catch (error) {
      console.log(error);
      Alert.alert("Nova refeição", "Houve algum erro ao cadastrar a refeição.");
    }
  }

  return (
    <Layout
      headerTitle="Nova refeição"
      onPressBackButton={() => navigation.navigate("home")}
    >
      <Content>
        <Label title="Nome" />
        <Input
          placeholder="Digite o nome da refeição"
          value={name}
          onChangeText={setName}
        />

        <Label title="Descrição" />
        <TextAreaContainer>
          <TextArea value={description} onChangeText={setDescription} />
        </TextAreaContainer>

        <DateBox>
          <View style={{ flex: 1 }}>
            <Label title="Data" />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Input
                placeholder="Selecione a data"
                placeholderTextColor="#ffff"
                value={date}
                editable={false}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={new Date()}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}
          </View>

          <View style={{ flex: 1 }}>
            <Label title="Hora" />
            <Input
              placeholder="hh:mm"
              placeholderTextColor="#ffff"
              value={hour}
              maxLength={5}
              onChangeText={(hour) => setHour(hourMask(hour))}
              style={{ flex: 1 }}
              keyboardType="numeric"
            />
          </View>
        </DateBox>

        <Label title="Está dentro da dieta?" />
        <SelectedBox>
          <SelectButton
            title="Sim"
            statusColor="green"
            isSelected={isOnTheDiet}
            onPress={() => setIsOnTheDiet(true)}
          />
          <SelectButton
            title="Não"
            statusColor="red"
            isSelected={!isOnTheDiet}
            onPress={() => setIsOnTheDiet(false)}
          />
        </SelectedBox>

        <Button title="Cadastrar refeição" onPress={handleRegisterNewMeal} />
      </Content>
    </Layout>
  );
}
