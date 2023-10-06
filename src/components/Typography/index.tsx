import { TextInputProps } from "react-native";
import { Title, TypographStyleProps } from "./styles";

type TypographyType = TextInputProps &
  TypographStyleProps & {
    title: string;
  };

export function Typography({ title, ...rest }: TypographyType) {
  return <Title {...rest}>{title}</Title>;
}
