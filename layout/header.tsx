import { memo, useCallback, useState } from "react";
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
  RegisterLink,
  Triangle,
} from "../styles/header";
import { MENU, MenuItem } from "./constants";

const Header = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = useCallback(() => setOpen(prev => !prev), []);

  return (
    <>
      <LogoTop>
        Gamor
        <Triangle open={open} onClick={handleToggle} />
      </LogoTop>
      <HeaderWrapper open={open}>
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
    </>
  )
};

export default memo(Header);
