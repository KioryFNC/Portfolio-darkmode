import { ArrowUpRight } from 'phosphor-react';
import * as Element from './styles'
import { useTheme } from 'styled-components';

interface ContactCardProps {
  image: string;
  title: string;
  link: string;
}

export function ContactCard({ image, title, link }: ContactCardProps) {
  const theme = useTheme()

  return (
    <Element.Card as='a' href={link} target="_blank" rel="noopener noreferrer">
      <div>
        <img src={image} />
        <p>{title}</p>
      </div>
      <ArrowUpRight color={theme['gray-200']} />
    </Element.Card>
  )
}