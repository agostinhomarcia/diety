import styled from "styled-components/native";
import { Typography } from "@components/Typography";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.gray_1};
`;

export const PercentCardButton = styled(TouchableOpacity)`
  margin-top: 32px;
`;

export const NewMealContent = styled.View`
  margin-top: 40px;
  gap: 8px;
`;

export const DateTitle = styled(Typography).attrs(({}) => ({
  size: "text_lg",
}))`
  margin-bottom: 8px;
  margin-top: 18px;
`;
