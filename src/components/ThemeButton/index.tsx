import { useTheme } from "../../contexts/ThemeContext";
import * as Element from "./styles";
import ButtonClickSoundFile from "../../assets/sounds/buttonClick.mp3";

export function ThemeButton() {
  const ButtonClickSound = new Audio(ButtonClickSoundFile);
  const playSound = (audio: HTMLAudioElement) => {
    audio.currentTime = 0;
    audio.play();
  };

  ButtonClickSound.volume = 0.1;

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Element.ThemeToggleWrapper onClick={() => playSound(ButtonClickSound)}>
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
