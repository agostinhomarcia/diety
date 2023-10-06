import { Typography } from "@components/Typography";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Content = styled(SafeAreaView)`
  flex: 1;
`;

export const Label = styled(Typography).attrs(({}) => ({
  size: "text_sm",
  weight: "bold",
}))`
  margin-bottom: 4px;
`;

export const TextAreaContainer = styled.View`
  padding: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
  margin-bottom: 24px;
`;

export const TextArea = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_6,
  multiline: true,
  numberOfLines: 5,
  textAlignVertical: "top",
}))`
  justify-content: flex-start;
`;

export const DateBox = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const SelectedBox = styled(DateBox)`
  gap: 8px;
  margin-bottom: 100px;
`;
