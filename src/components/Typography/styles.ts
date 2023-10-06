import styled, { css } from "styled-components/native";
import theme from "@theme/index";

export type TypographStyleProps = {
  weight?: keyof typeof theme.font_family;
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.font_size;
};

export const Title = styled.Text<TypographStyleProps>`
  ${({ theme, weight, color, size }) => css`
    font-family: ${theme.font_family[weight ?? "regular"]};
    font-size: ${theme.font_size[size ?? "text_md"]}px;
    color: ${theme.colors[color ?? "gray_7"]};
  `}
`;
