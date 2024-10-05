import React, { createContext, useState } from 'react';

const initialTheme = {
  theme: 'light',
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialTheme);
const ThemeProvider = ({ children }) => {
  const themes = {
    light: 'light',
    dark: 'dark',
  };
  const [theme, setTheme] = useState(initialTheme.theme);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
