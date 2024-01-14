import { useState } from "react";
import { View, Alert } from "react-native";

import { Content, Status, StatusCard } from "./styles";

import { Layout } from "@components/Layout";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { Modal } from "@components/Modal";

import { useTheme } from "styled-components/native";

import { PencilSimpleLine, Trash } from "phosphor-react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { deleteMealById } from "@storage/meals/deleteMealById";

type RouteParams = {
  meal: MealStorageDTO;
};

export function MealDetails() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const { colors } = useTheme();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const navigation = useNavigation();

  async function handleDeleteMeal() {
    try {
      await deleteMealById(meal.id);
      navigation.navigate("home");
      Alert.alert("Deletar refeição", "Refeição removida com sucesso. 🤗");
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Excluir refeição",
        "Houve um erro ao tentar remover esta refeição."
      );
    }
  }

  return (
    <Layout
      headerTitle="Refeição"
      variant={meal.isOnTheDiet ? "green" : "red"}
      onPressBackButton={() => navigation.navigate("home")}
    >
      <Content>
        <View style={{ gap: 8 }}>
          <Typography title={meal.name} size="text_2xl" weight="bold" />
          <Typography title={meal.description} size="text_lg" color="gray_6" />
        </View>

        <View style={{ gap: 8 }}>
          <Typography title="Data e hora" size="text_sm" weight="bold" />
          <Typography
            title={`${meal.date} às ${meal.hour}`}
            size="text_md"
            color="gray_6"
          />
        </View>

        <StatusCard>
          <Status variant={meal.isOnTheDiet ? "green" : "red"} />
          <Typography
            title={meal.isOnTheDiet ? "dentro da dieta" : "fora da dieta"}
          />
        </StatusCard>

        <Modal
          visible={isVisibleModal}
          statusBarTranslucent
          onDeleteMeal={handleDeleteMeal}
          closeModal={() => setIsVisibleModal(false)}
        />

        <View style={{ gap: 8, marginTop: 200 }}>
          <Button
            title="Editar refeição"
            icon={<PencilSimpleLine size={18} color={colors.white} />}
            onPress={() => navigation.navigate("editMeal", { meal })}
          />

          <Button
            title="Excluir refeição"
            variant="secondary"
            icon={<Trash size={18} color={colors.gray_7} />}
            onPress={() => setIsVisibleModal(true)}
          />
        </View>
      </Content>
    </Layout>
  );
}
