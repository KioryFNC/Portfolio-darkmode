import { createContext, useContext } from "react";

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeProvider is required.");
  }
  return context;
}