import { DownloadSimple } from "phosphor-react";
import * as Element from "./styles";
import { useTheme } from "styled-components";
import { translations } from "../../utils/translations";
import { useLanguage } from "../../contexts/LanguageContext";
import { useSound } from "../../hooks/useSound";

interface ResumeDownloadCardProps {
  fileUrl: string;
  label?: string;
}

export function ResumeDownloadCard({
  fileUrl,
  label,
}: ResumeDownloadCardProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const theme = useTheme();
  const { playHover, playClick } = useSound();

  return (
    <Element.Card
      as="a"
      href={fileUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={playHover}
      onClick={playClick}
    >
      <div>
        <DownloadSimple size={28} color={theme["textColor"]} />
        <p>{label ?? t.CV}</p>
      </div>
    </Element.Card>
  );
}
