import { memo } from "react";
import {
  HeaderWrapper,
  Li,
  Link,
  LinkHome,
  LiRegister,
  LogoCenter,
  LogoTop,
  Menu,
  MenuRight,
  RegisterLink
} from "../styles/header";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoTop>Gamor</LogoTop>
      <Menu>
        <Li>
          <LinkHome href="/">Home</LinkHome>
        </Li>
        <Li>
          <Link href="/">Streams</Link>
        </Li>
        <Li>
          <Link href="/">Party</Link>
        </Li>
        <Li>
          <Link href="/">Premium</Link>
        </Li>
      </Menu>
      <LogoCenter>Gamor</LogoCenter>
      <MenuRight>
        <Li>
          <Link href="/login">Sign in</Link>
        </Li>
        <LiRegister>
          <RegisterLink href="/login">Create account</RegisterLink>
        </LiRegister>
      </MenuRight>
    </HeaderWrapper>
  )
};

export default memo(Header);
