import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function ThemeButton() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null; // Evita erro caso o contexto não esteja disponível
  }

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
