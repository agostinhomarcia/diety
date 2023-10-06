import { PercentCard } from "@components/PercentCard";
import {
  Container,
  Header,
  MainContent,
  Title,
  TotalMealsContent,
} from "./styles";
import { DetailsCard } from "@components/DetailsCard";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Statistics as StatisticsRoutes } from "@screens/home";

import { percentegeFormatter } from "@utils/formatter";

type RouteParams = {
  statistics: StatisticsRoutes;
};

export function Statistics() {
  const route = useRoute();
  const { statistics } = route.params as RouteParams;

  const navigation = useNavigation();

  return (
    <Container variant={statistics.percentage >= 50 ? "green" : "red"}>
      <Header>
        <PercentCard
          title={
            !statistics.percentage
              ? "0%"
              : `${percentegeFormatter(statistics.percentage)}%`
          }
          subtitle="das refeições dentro da dieta"
          iconPosition="left"
          variant={statistics.percentage >= 50 ? "green" : "red"}
          onPress={() => navigation.navigate("home")}
        />
      </Header>

      <MainContent>
        <Title title="Estatísticas gerais" />

        <DetailsCard
          title={`${statistics.bestSequenceMeals}`}
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <DetailsCard
          title={`${statistics.totalMeals}`}
          subtitle="refeições registradas"
        />

        <TotalMealsContent>
          <DetailsCard
            variant="green"
            title={`${statistics.onTheDiet}`}
            subtitle="refeições dentro da dieta"
            style={{ flex: 1 }}
          />

          <DetailsCard
            variant="red"
            title={`${statistics.offTheDiet}`}
            subtitle="refeições fora da dieta"
            style={{ flex: 1 }}
          />
        </TotalMealsContent>
      </MainContent>
    </Container>
  );
}
