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
import { MENU, MenuItem } from "./constants";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoTop>Gamor</LogoTop>
      <Menu>
        <Li>
          <LinkHome href="/">Home</LinkHome>
        </Li>
        {MENU.map(({ label, href }: MenuItem) => (
          <Li key={label}>
            <Link href={href}>{label}</Link>
          </Li>
        ))}
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
