import { useTheme } from "../../contexts/ThemeContext";
import * as Element from "./styles";

export function ThemeButton() {

  const { isDarkMode, toggleTheme } = useTheme();

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
