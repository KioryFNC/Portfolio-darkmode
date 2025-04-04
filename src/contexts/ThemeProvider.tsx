import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "../styles/themes/default";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const storedTheme = localStorage.getItem("theme") === "dark";
  const [isDarkMode, setIsDarkMode] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Provider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </Provider>
    </ThemeContext.Provider>
  );
}