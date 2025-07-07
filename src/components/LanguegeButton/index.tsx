import { useLanguage } from "../../contexts/LanguageContext";
import * as Element from "./styles";

export function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();
}
