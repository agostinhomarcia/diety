import { ReactNode } from "react";
import {
  BackButton,
  ButtonIcon,
  Container,
  Content,
  Header,
  HeaderStyleProps,
  HeaderTitle,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

type LayoutProps = {
  headerTitle: string;
  children: ReactNode;
  variant?: HeaderStyleProps;
  onPressBackButton: () => void;
};

export function Layout({
  headerTitle,
  children,
  variant = "gray",
  onPressBackButton,
}: LayoutProps) {
  const navigation = useNavigation();

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header variant={variant}>
        <BackButton onPress={onPressBackButton}>
          <ButtonIcon />
        </BackButton>

        <HeaderTitle title={headerTitle} />
      </Header>

      <Content>{children}</Content>
    </Container>
  );
}
