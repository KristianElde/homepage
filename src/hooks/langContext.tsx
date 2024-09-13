import { useLocalStorage } from "@uidotdev/usehooks";

export const useLang = () => {
  const [langStorage, setLangStorage] = useLocalStorage("lang", "en");
  const setLang = (lang: "en" | "no") => {
    setLangStorage(lang);
  };
  return [langStorage, setLang] as const;
};
