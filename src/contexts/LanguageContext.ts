import { createContext, useContext } from "react";

export interface LanguageContextType {
  language: "pt" | "en";
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageProvider is required");
  }
  return context;
}
