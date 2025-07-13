import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function Hello () {
    const language = useContext(LanguageContext);
    const messages = {
    en: 'Hello, World!',
    it: 'Ciao, Mondo!',
    es: 'Hola, Mundo!',
    fr: 'Bonjour, le monde!',
  };

    return (
        <div>
            <h2>{messages[language] || messages.en}</h2>
        </div>
    )
}