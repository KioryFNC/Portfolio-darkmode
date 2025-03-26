import * as Element from './styles'

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  siteLink: string;
  codeLink: string;
}

export function ProjectCard({ image, title, description, siteLink, codeLink }: ProjectCardProps) {
  return (
    <Element.Card>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="buttons">
        <a href={siteLink} target='_blank' rel='noopener noreferrer'>Site</a>
        <a href={codeLink} target='_blank' rel='noopener noreferrer'>Código</a>
      </div>
    </Element.Card>
  )
}