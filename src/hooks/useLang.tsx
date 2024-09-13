"use client";
import { useLocalStorageState } from "ahooks";

export const useLang = () => {
  const [langStorage, setLangStorage] = useLocalStorageState("lang", {
    defaultValue: "no",
    listenStorageChange: true,
  });
  const setLang = (lang: "en" | "no") => {
    setLangStorage(lang);
  };
  return [langStorage, setLang] as const;
};
