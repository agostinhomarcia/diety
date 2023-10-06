import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { Typography } from "@components/Typography";

export type ButtonTypeStyleProps = "primary" | "secondary";

type StyledProps = {
  variant: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<StyledProps>`
  min-height: 50px;
  padding: 16px 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray_6};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray_6};

  ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      background-color: transparent;
      border:1px solid ${theme.colors.gray_7};
    `}

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled(Typography).attrs<StyledProps>(({ variant }) => ({
  size: "text_sm",
  weight: "bold",
  color: variant === "primary" ? "white" : "gray_7",
}))``;
