import { View } from "react-native";
import styled from "styled-components/native";

export type DetailsCardStyleProps = "green" | "red" | "gray";

type styledProps = {
  variant: DetailsCardStyleProps;
};

export const Container = styled(View)<styledProps>`
  width: 100%;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 12px;

  background-color: ${({ theme, variant }) => {
    if (variant === "gray") return theme.colors.gray_2;
    if (variant === "green") return theme.colors.green_light;
    if (variant === "red") return theme.colors.red_light;
  }};

  align-items: center;
  justify-content: center;
`;
