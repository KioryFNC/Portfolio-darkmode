import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import * as Element from "./styles";

export function ThemeButton() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <Element.ThemeToggleWrapper>
      <Element.ThemeToggleInput
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <Element.ThemeToggleSlider>
        {isDarkMode ? (
          <>
            <Element.Star1 />
            <Element.Star2 />
            <Element.Star3 />
          </>
        ) : (
          <>
            <Element.Cloud />
          </>
        )}
      </Element.ThemeToggleSlider>
    </Element.ThemeToggleWrapper>
  );
}
