import { TouchableOpacityProps } from "react-native";
import { Container, SelectButtonStyleProps, Status, Title } from "./styles";

type SelectButton = TouchableOpacityProps & {
  title: string;
  isSelected?: boolean;
  variant?: SelectButtonStyleProps;
  statusColor: SelectButtonStyleProps;
};

export function SelectButton({
  title,
  statusColor,
  isSelected ,
  ...rest
}: SelectButton) {
  return (
    <Container {...rest} isSelected={isSelected} bgColor={statusColor} >
      <Status bgColor={statusColor} />
      <Title title={title} />
    </Container>
  );
}
