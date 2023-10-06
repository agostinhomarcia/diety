import { TextInput } from "./styles";
import { TextInputProps } from "react-native";

type InputProps = TextInputProps & {};

export function Input({ ...rest }: InputProps) {
  return <TextInput {...rest} />;
}
