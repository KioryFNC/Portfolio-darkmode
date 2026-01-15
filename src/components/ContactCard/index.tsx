import { ArrowUpRight } from "phosphor-react";
import * as Element from "./styles";
import { useTheme } from "styled-components";
import { useSound } from "../../hooks/useSound";

interface ContactCardProps {
  image: string;
  title: string;
  link: string;
}

export function ContactCard({ image, title, link }: ContactCardProps) {
  const theme = useTheme();
  const { playHover, playClick } = useSound();

  return (
    <Element.Card
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={playHover}
      onClick={playClick}
    >
      <div>
        <img src={image} />
        <p>{title}</p>
      </div>
      <ArrowUpRight color={theme["gray-200"]} />
    </Element.Card>
  );
}
