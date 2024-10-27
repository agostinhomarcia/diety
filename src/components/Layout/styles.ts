import styled from "styled-components/native";

import { ArrowLeft } from "phosphor-react-native";
import { Typography } from "@components/Typography";

export type HeaderStyleProps = "gray" | "green" | "red";

type StyledProps = {
  variant: HeaderStyleProps;
};

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View<StyledProps>`
  width: 100%;
  height: 132px;
  padding: 0px 24px;
  background-color: ${({ theme, variant }) => {
    if (variant === "gray") return theme.colors.gray_3;
    if (variant === "green") return theme.colors.green_light;
    if (variant === "red") return theme.colors.red_light;
  }};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const ButtonIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_6,
}))``;

export const HeaderTitle = styled(Typography).attrs(({}) => ({
  size: "text_lg",
  weight: "bold",
}))`
  margin: 0 auto;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -25px;
  padding: 40px 24px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray_1};
`;
