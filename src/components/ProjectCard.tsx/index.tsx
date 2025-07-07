import * as Element from "./styles";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../utils/translations";

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

  return (
    <Element.Card>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="buttons">
        <a href={siteLink} target="_blank" rel="noopener noreferrer">
          {t.projectCard.site}
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          {t.projectCard.code}
        </a>
      </div>
    </Element.Card>
  );
}
