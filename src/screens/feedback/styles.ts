import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 24px;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font_size.text_md}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_7};
  `}
`;

export const IllustrationImage = styled.Image`
  margin-top: 40px;
`;
