import { useLanguage } from "../../contexts/LanguageContext";
import * as Element from "./styles";

import brFlag from "../../assets/Flags/Brasil.jpg";
import usFlag from "../../assets/Flags/US.jpg";
import ButtonClickSoundFile from "../../assets/sounds/buttonClick.mp3";

export function LanguageButton() {
  const ButtonClickSound = new Audio(ButtonClickSoundFile);
  const playSound = (audio: HTMLAudioElement) => {
    audio.currentTime = 0;
    audio.play();
  };

  ButtonClickSound.volume = 0.1;

  const { language, toggleLanguage } = useLanguage();

  return (
    <Element.LanguageToggleWrapper onClick={() => playSound(ButtonClickSound)}>
      <Element.LanguageToggleInput
        type="checkbox"
        checked={language === "en"}
        onChange={toggleLanguage}
      />
      <Element.LanguageToggleSlider>
        <Element.FlagImage
          src={language === "pt" ? brFlag : usFlag}
          alt={language === "pt" ? "Portugues" : "English"}
        />
      </Element.LanguageToggleSlider>
    </Element.LanguageToggleWrapper>
  );
}
