import { ArrowUpRight } from 'phosphor-react';
import * as Element from './styles'

interface ContactCardProps {
  image: string;
  title: string;
  link: string;
}

export function ContactCard({ image, title, link }: ContactCardProps) {
  return (
    <Element.Card as='a' href={link} target="_blank" rel="noopener noreferrer">
      <div>
        <img src={image} />
        <p>{title}</p>
      </div>
      <ArrowUpRight />
    </Element.Card>
  )
}