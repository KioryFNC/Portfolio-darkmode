import { LanguageProvider } from "./contexts/LanguageProvider";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </LanguageProvider>
  );
}
