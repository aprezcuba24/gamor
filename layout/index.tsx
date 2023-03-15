import { memo, useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/theme";

const Layout = () => {
  const [theme, setThemeMode] = useState(lightTheme);
  const toggleTheme = useCallback(() => setThemeMode(prev => prev === lightTheme ? darkTheme : lightTheme), []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Layout</h1>
      <button onClick={toggleTheme}>change theme</button>
    </ThemeProvider>
  );
};
export default memo(Layout);