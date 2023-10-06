import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type StatusStyleProps = "green" | "red";

type StyledProps = {
  variant: StatusStyleProps;
};

export const Content = styled(SafeAreaView)`
  flex: 1;
  gap: 24px;
  background-color: transparent;
`;

export const StatusCard = styled.View`
  width: 150px;
  padding: 8px 16px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.gray_2};

  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
`;

export const Status = styled.View<StyledProps>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ theme, variant }) =>
    variant === "green" ? theme.colors.green_dark : theme.colors.red_dark};
`;
