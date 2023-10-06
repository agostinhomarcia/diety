import { useState } from "react";
import { View, Alert } from "react-native";

import {
  Content,
  DateBox,
  Label,
  SelectedBox,
  TextArea,
  TextAreaContainer,
} from "./styles";

import { Input } from "@components/Input";
import { Layout } from "@components/Layout";
import { Button } from "@components/Button";
import { SelectButton } from "@components/SelectButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { dateMask, hourMask } from "@utils/inputMask";

import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { updateMealById } from "@storage/meals/updateMealById";

type RouteParams = {
  meal: MealStorageDTO;
};

export function EditMeal() {
  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const [name, setName] = useState(meal.name);
  const [description, setDescription] = useState(meal.description);
  const [date, setDate] = useState(meal.date);
  const [hour, setHour] = useState(meal.hour);
  const [isOnTheDiet, setIsOnTheDiet] = useState(meal.isOnTheDiet);
  const [updatedMeal, setUpdatedMeal] = useState<MealStorageDTO>(
    {} as MealStorageDTO
  );

  async function handleUpdateMeal() {
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

      const mealToUpdate = {
        ...meal,
        name,
        description,
        date,
        hour,
        isOnTheDiet,
      };

      await updateMealById(meal.id, mealToUpdate);
      setUpdatedMeal(mealToUpdate);
      navigation.navigate("mealDetails", { meal: mealToUpdate });
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Atualizar refeição",
        "Houve um erro ao tentar atualizar a refeição."
      );
    }
  }

  return (
    <Layout
      headerTitle="Editar refeição"
      onPressBackButton={() => navigation.navigate("mealDetails", { meal })}
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
            <Input
              placeholder="DD/MM/YYYY"
              value={meal.date}
              maxLength={10}
              keyboardType="numeric"
              onChangeText={(date) => setDate(dateMask(date))}
              style={{ flex: 1 }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Label title="Hora" />
            <Input
              placeholder="hh:mm"
              value={meal.hour}
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

        <Button title="Salvar alterações" onPress={handleUpdateMeal} />
      </Content>
    </Layout>
  );
}
