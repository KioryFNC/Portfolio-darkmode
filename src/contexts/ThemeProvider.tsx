import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "../styles/themes/default";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProviderWrapper({ children }: ThemeProviderProps) {
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
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
