import * as Element from "./styles";

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
  return (
    <Element.Card>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="buttons">
        <a href={videoLink} target="_blank" rel="noopener noreferrer">
          Link Vídeo
        </a>
      </div>
    </Element.Card>
  );
}
