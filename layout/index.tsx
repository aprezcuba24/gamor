import { memo, ReactNode, useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/theme";
import Header from "./header";

type LayoutProps = {
  children?: ReactNode | undefined;
};

const Layout = ({ children }: LayoutProps) => {
  const [theme, setThemeMode] = useState(lightTheme);
  const toggleTheme = useCallback(() => setThemeMode(prev => prev === lightTheme ? darkTheme : lightTheme), []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <h1>Layout</h1>
      <button onClick={toggleTheme}>change theme</button>
      {children}
    </ThemeProvider>
  );
};
export default memo(Layout);