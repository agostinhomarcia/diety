import { ViewProps } from "react-native";

import {
  ArrowLeftIcon,
  ArrowUpIcon,
  ButtonIcon,
  Container,
  PercentCardStyleProps,
} from "./styles";

import { Typography } from "@components/Typography";

type PercentCardProps = ViewProps & {
  variant?: PercentCardStyleProps;
  title: string;
  subtitle: string;
  iconPosition?: "left" | "right";
  onPress?: () => void;
};

export function PercentCard({
  title,
  subtitle,
  onPress,
  variant = "green",
  iconPosition = "right",
  ...rest

}: PercentCardProps) {


  return (
    <Container variant={variant} {...rest}>
      {iconPosition === "left" ? (
        <ButtonIcon onPress={onPress}>
          <ArrowLeftIcon variant={variant} />
        </ButtonIcon>
      ) : (
        <ArrowUpIcon variant={variant} />
      )}

      <Typography size="text_3xl" weight="bold" color="gray_7" title={title} />
      <Typography size="text_sm" color="gray_6" title={subtitle} />
    </Container>
  );
}
