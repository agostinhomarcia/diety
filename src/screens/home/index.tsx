import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";

import {
  Container,
  NewMealContent,
  PercentCardButton,
  DateTitle,
} from "./styles";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";
import { DayListItem } from "@components/DayListItem";

import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";

import dayjs from "dayjs";

import { getlAllMeals } from "@storage/meals/getAllMeals";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { filteredMeals } from "@utils/filteredMeals";

import {
  calculateNumberOfMeals,
  calculatePercentage,
} from "@utils/calculateStatistics";

import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";

import { percentegeFormatter } from "@utils/formatter";

type Meals = {
  date: string;
  data: MealStorageDTO[];
};

export type NumberOfMeals = {
  onTheDiet: number;
  offTheDiet: number;
  bestSequenceMeals: number;
  totalMeals: number;
};

export type Statistics = {
  percentage: number;
  onTheDiet: number;
  offTheDiet: number;
  bestSequenceMeals: number;
  totalMeals: number;
};

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<Meals[]>([]);
  const [statistics, setStatistics] = useState<Statistics>({} as Statistics);

  const { colors } = useTheme();

  const navigation = useNavigation();

  async function fetchMeals() {
    try {
      setIsLoading(true);

      const data = await getlAllMeals();

      const percentage = calculatePercentage(data);
      const generaStatistics = calculateNumberOfMeals(data);

      setStatistics({
        percentage,
        ...generaStatistics,
      });

      const mealsList = filteredMeals(data);

      setMeals(mealsList);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Refeições",
        "Não foi possível carregar a lista de refeições."
      );
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header />

      <PercentCardButton
        onPress={() => {
          navigation.navigate("statistics", { statistics });
        }}
      >
        <PercentCard
          title={
            !statistics.percentage
              ? "0%"
              : `${percentegeFormatter(statistics.percentage)}%`
          }
          subtitle="das refeições dentro da dieta"
          variant={statistics.percentage >= 50 ? "green" : "red"}
        />
      </PercentCardButton>

      <NewMealContent>
        <Typography title="Refeições" />

        <Button
          onPress={() => navigation.navigate("newMeal")}
          title="Nova refeição"
          icon={<Plus size={18} color={colors.white} />}
        />
      </NewMealContent>

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DayListItem
              title={item.name}
              hours={item.hour}
              isHealthy={item.isOnTheDiet}
              onPress={() => navigation.navigate("mealDetails", { meal: item })}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Ops, você não possui nenhuma refeição cadastrada..." />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <DateTitle
              title={dayjs(date).format("DD/MM/YYYY").replaceAll("/", ".")}
            />
          )}
          contentContainerStyle={{ marginTop: "auto", marginBottom: "auto" }}
          style={{ flex: 1, marginTop: 18 }}
        />
      )}
    </Container>
  );
}
