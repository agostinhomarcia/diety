import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

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
import theme from "@theme/index";

interface DateChangeHandler {
  (event: DateTimePickerEvent, selectedDate: Date | undefined): void;
}

interface TimeChangeHandler {
  (event: DateTimePickerEvent, selectedTime: Date | undefined): void;
}

export function NewMeal() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [isOnTheDiet, setIsOnTheDiet] = useState(true);

  // Estados para controlar a exibição dos pickers
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Função para lidar com a mudança de data
  const onDateChange: DateChangeHandler = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = dateMask(selectedDate.toLocaleDateString("pt-BR"));
      setDate(formattedDate);
    }
  };

  const onTimeChange: TimeChangeHandler = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const formattedHour = hourMask(
        `${selectedTime.getHours().toString().padStart(2, "0")}:${selectedTime
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      );
      setHour(formattedHour);
    }
  };

  async function handleRegisterNewMeal() {
    try {
      if (!name.trim() || !date.trim() || !hour.trim()) {
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
          placeholderTextColor={theme.colors.gray_3}
          value={name}
          onChangeText={setName}
        />

        <Label title="Descrição" />
        <TextAreaContainer>
          <TextArea
            placeholder="Descrição da refeição"
            placeholderTextColor={theme.colors.gray_3}
            value={description}
            onChangeText={setDescription}
          />
        </TextAreaContainer>

        <DateBox>
          <View style={{ flex: 1 }}>
            <Label title="Data" />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Input
                placeholder="Selecione a data"
                placeholderTextColor={theme.colors.gray_3}
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
            <TouchableOpacity onPress={() => setShowTimePicker(true)}>
              <Input
                placeholder="Selecione a hora"
                placeholderTextColor={theme.colors.gray_3}
                value={hour}
                editable={false}
              />
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={new Date()}
                mode="time"
                display="default"
                onChange={onTimeChange}
              />
            )}
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
