"use client";

import { useLang } from "../components/langContext";

export default function Projects() {
  const { language, changeLanguage } = useLang();
  const greeting = language === "no" ? "Hei!" : "Hello!";
  return (
    <>
      <h1>Projects</h1>
      <div>{greeting}</div>
    </>
  );
}
