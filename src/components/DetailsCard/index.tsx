import { ViewProps } from "react-native";

import { Container, DetailsCardStyleProps } from "./styles";

import { Typography } from "@components/Typography";

type DetailsCardProps = ViewProps & {
  variant?: DetailsCardStyleProps;
  title: string;
  subtitle: string;
};

export function DetailsCard({
  title,
  subtitle,
  variant = "gray",
  ...rest
}: DetailsCardProps) {
  return (
    <Container variant={variant} {...rest}>
      <Typography size="text_2xl" weight="bold" color="gray_7" title={title} />
      <Typography
        size="text_sm"
        color="gray_6"
        title={subtitle}
        style={{ textAlign: "center" }}
      />
    </Container>
  );
}
