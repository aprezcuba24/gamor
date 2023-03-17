import { memo, ReactNode, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/theme";
import Header from "./header";

type LayoutProps = {
  children?: ReactNode | undefined;
};

const Layout = ({ children }: LayoutProps) => {
  const [theme, setThemeMode] = useState(darkTheme);
  const toggleTheme = useCallback(() => setThemeMode(prev => prev === lightTheme ? darkTheme : lightTheme), []);
  const isDark = useMemo(() => theme === darkTheme, [theme])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
};
export default memo(Layout);