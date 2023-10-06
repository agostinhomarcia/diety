import { Avatar, Container, Logo } from "./styles";

import appLogo from "@assets/logo.png";
import avatarImg from "@assets/avatar.png";

export function Header() {
  return (
    <Container>
      <Logo source={appLogo} />
      <Avatar source={avatarImg} />
    </Container>
  );
}
