import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Typography } from "@components/Typography";

export type StatusStyleProps = boolean;

type StyledProps = {
  onTheDiet: StatusStyleProps;
};

export const Container = styled(TouchableOpacity)`
  height: 49px;
  padding: 0px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const HourTitle = styled(Typography).attrs(({}) => ({
  size: "text_xs",
}))`
  padding-right: 12px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.gray_4};
`;

export const MealTitle = styled(Typography).attrs(({}) => ({
  size: "text_lg",
  color: "gray_6",
  numberOfLines: 1,
}))`
  flex: 1;
  padding: 0px 12px;
`;

export const Status = styled.View<StyledProps>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: ${({ theme, onTheDiet }) =>
    onTheDiet ? theme.colors.green_mid : theme.colors.red_mid};
`;
