import { useState } from 'react';

import GlobalStyles from "./style/GlobalStyles";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';

import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  function toggleTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Home
        onToggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
}

export default App;
