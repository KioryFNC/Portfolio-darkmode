import * as Element from "./styles";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../utils/translations";

interface VideoCardProps {
  image: string;
  title: string;
  description: string;
  videoLink: string;
}

export function VideoCard({
  image,
  title,
  description,
  videoLink,
}: VideoCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Element.Card>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="buttons">
        <a href={videoLink} target="_blank" rel="noopener noreferrer">
          {t.projectCard.site || "Assistir"}
        </a>
      </div>
    </Element.Card>
  );
}
