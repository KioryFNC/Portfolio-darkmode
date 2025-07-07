import { useLanguage } from "../../contexts/LanguageContext";
import * as Element from "./styles";

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
        {language === "pt" ? (
          <Element.PTLabel>PT</Element.PTLabel>
        ) : (
          <Element.ENLabel>EN</Element.ENLabel>
        )}
      </Element.LanguageToggleSlider>
    </Element.LanguageToggleWrapper>
  );
}
