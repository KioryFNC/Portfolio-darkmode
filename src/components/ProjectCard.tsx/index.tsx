import * as Element from "./styles";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../utils/translations";
import { useSound } from "../../hooks/useSound";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  siteLink: string;
  codeLink: string;
}

export function ProjectCard({
  image,
  title,
  description,
  siteLink,
  codeLink,
}: ProjectCardProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const { playHover, playClick } = useSound();

  return (
    <Element.Card onMouseEnter={playHover}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="buttons">
        <a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
        >
          {t.projectCard.site}
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
        >
          {t.projectCard.code}
        </a>
      </div>
    </Element.Card>
  );
}
