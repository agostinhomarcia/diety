import { TextInput as Input } from "react-native";
import styled, { css } from "styled-components/native";

export const TextInput = styled(Input).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_6,
}))`
  width: 100%;
  height: 48px;
  padding: 14px;
  border-radius: 6px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray_3};
    color: ${theme.colors.gray_7};
  `}
`;
