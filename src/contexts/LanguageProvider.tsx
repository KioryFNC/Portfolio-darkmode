import { ReactNode, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<"pt" | "en">(() => {
    const stored = localStorage.getItem("language");
    return stored === "en" ? "en" : "pt";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  function toggleLanguage() {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
