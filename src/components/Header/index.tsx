import * as Element from "./styles";
import Logo from "../../assets/Logo.png";
import LogoLight from "../../assets/LogoLight.png";
import { useEffect } from "react";
import { ThemeButton } from "../ThemeButton";
import { LanguageButton } from "../LanguegeButton";
import { useTheme } from "styled-components";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../utils/translations";
import { useSound } from "../../hooks/useSound";

export function Header() {
  const { playHover, playClick } = useSound();

  const theme = useTheme();

  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleSmoothScroll = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        event.preventDefault();
        const section = document.querySelector(target.hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <Element.Root>
      <img src={theme.title === "light" ? LogoLight : Logo} />
      <div>
        <nav>
          <a href="#about" onMouseEnter={playHover} onClick={playClick}>
            {t.menu.about}
          </a>
          <a href="#project" onMouseEnter={playHover} onClick={playClick}>
            {t.menu.projects}
          </a>
          <a href="#contact" onMouseEnter={playHover} onClick={playClick}>
            {t.menu.contact}
          </a>
        </nav>
        <ThemeButton />
        <LanguageButton />
      </div>
    </Element.Root>
  );
}
