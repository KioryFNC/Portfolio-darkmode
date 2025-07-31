import { DownloadSimple } from "phosphor-react";
import * as Element from "./styles";
import { useTheme } from "styled-components";
import { translations } from "../../utils/translations";
import { useLanguage } from "../../contexts/LanguageContext";

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

  return (
    <Element.Card
      as="a"
      href={fileUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <DownloadSimple size={28} color={theme["textColor"]} />
        <p>{label ?? t.CV}</p>
      </div>
    </Element.Card>
  );
}
