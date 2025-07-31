import { DownloadSimple } from "phosphor-react";
import * as Element from "./styles";
import { useTheme } from "styled-components";

interface ResumeDownloadCardProps {
  fileUrl: string;
  label?: string;
}

export function ResumeDownloadCard({
  fileUrl,
  label = "Baixar Curriculo",
}: ResumeDownloadCardProps) {
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
        <p>{label}</p>
      </div>
    </Element.Card>
  );
}
