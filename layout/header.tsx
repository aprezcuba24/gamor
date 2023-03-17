import { memo, useCallback, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import {
  HeaderMobile,
  HeaderWrapper,
  Li,
  Link,
  LinkHome,
  LiRegister,
  Logo,
  LogoCenter,
  Menu,
  MenuRight,
  RegisterLink,
  ThemeToggleLi,
  Triangle,
} from "../styles/header";
import { MENU, MenuItem } from "./constants";
import {useSecurityContext} from '../context/SecurityContext';

type Props = {
  isDark: boolean;
  toggleTheme: () => void;
};

const Header = ({ isDark, toggleTheme }: Props) => {
  const { isAuthenticated, onLogout } = useSecurityContext();
  const [open, setOpen] = useState(true);
  const handleToggle = useCallback(() => setOpen(prev => !prev), []);
  const toggleThemeButton = <ThemeToggle isDark={isDark} onClick={toggleTheme} />;

  return (
    <>
      <HeaderMobile>
        <Logo>
          Gamor
        </Logo>
        <Triangle open={open} onClick={handleToggle} />
        {toggleThemeButton}
      </HeaderMobile>
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
            {isAuthenticated? <Link href="#" onClick={onLogout}>Logout</Link>: <Link href="/login">Sign in</Link>}
          </Li>
          <LiRegister>
            <RegisterLink href="/login">Create account</RegisterLink>
          </LiRegister>
          <ThemeToggleLi>
            {toggleThemeButton}
          </ThemeToggleLi>
        </MenuRight>
      </HeaderWrapper>
    </>
  )
};

export default memo(Header);
