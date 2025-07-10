import { useLanguage } from "../../contexts/LanguageContext";
import * as Element from "./styles";

import brFlag from "../../assets/Flags/Brasil.jpg";
import usFlag from "../../assets/Flags/US.jpg";

export function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Element.LanguageToggleWrapper>
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
