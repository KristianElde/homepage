"use client";

import { useSyncExternalStore } from "react";
import { useLocalStorageState } from "ahooks";

type Language = "en" | "no";

// Stable functions declared outside the hook.
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export const useLang = () => {
  const hydrated = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const [storedLanguage, setStoredLanguage] =
    useLocalStorageState<Language>("lang", {
      defaultValue: "no",
      listenStorageChange: true,
    });

  const language: Language =
    hydrated && storedLanguage === "en" ? "en" : "no";

  const setLanguage = (nextLanguage: Language) => {
    setStoredLanguage(nextLanguage);
  };

  return [language, setLanguage] as const;
};