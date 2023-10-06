import { TouchableOpacityProps, View } from "react-native";

import {
  Container,
  MealTitle,
  Status,
  StatusStyleProps,
  HourTitle,
} from "./styles";

type DayListItemProps = TouchableOpacityProps & {
  title: string;
  hours: string;
  isHealthy: StatusStyleProps;
  onPress: () => void;
};

export function DayListItem({
  title,
  hours,
  isHealthy,
  onPress,
}: DayListItemProps) {
  return (
    <Container onPress={onPress}>
      <HourTitle title={hours} />

      <MealTitle title={title} />
      <Status onTheDiet={isHealthy} />
    </Container>
  );
}
