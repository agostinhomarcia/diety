import { Typography } from "@components/Typography";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectButtonStyleProps = "green" | "red";

type StyledProps = {
  bgColor: SelectButtonStyleProps;
  isSelected: boolean;
};

export const Container = styled(TouchableOpacity)<StyledProps>`
  flex: 1;
  height: 50px;
  padding: 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray_3};

  ${({ theme, bgColor, isSelected }) =>
    isSelected &&
    css`
      background-color: ${bgColor === "green"
        ? theme.colors.green_light
        : theme.colors.red_light};

      border: 1px solid
        ${bgColor === "green" ? theme.colors.green_dark : theme.colors.red_dark};
    `}

  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
`;

export const Title = styled(Typography).attrs(({}) => ({
  size: "text_sm",
  weight: "bold",
}))``;

export const Status = styled.View<StyledProps>`
  width: 8px;
  height: 8px;
  border-radius: 8px;

  ${({ theme, bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor === "green"
        ? theme.colors.green_dark
        : theme.colors.red_dark};
    `}
`;
