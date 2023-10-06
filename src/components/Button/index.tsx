import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
  variant?: ButtonTypeStyleProps;
  icon?: ReactNode;
};

export function Button({
  title,
  isActive = true,
  variant = "primary",
  icon,
  ...rest
}: ButtonProps) {
  return (
    <Container
      variant={variant}
      {...rest}
      disabled={!isActive}
    >
      {icon}

      <Title title={title} variant={variant} />
    </Container>
  );
}
