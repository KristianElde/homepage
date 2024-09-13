/* eslint-disable @next/next/no-img-element */
"use client";
import { LuAlarmCheck, LuAlbum, LuMoon, LuSun } from "react-icons/lu";
import { useLang } from "../hooks/langContext";

const LangSwitcher = () => {
  const [language, changeLanguage] = useLang();

  return (
    <div className="space-x-2">
      <button className="h-10 w-10" onClick={() => changeLanguage("en")}>
        <img
          className={`border ${language === "no" ? "opacity-30" : ""}`}
          src="uk.png"
          alt=""
          width={200}
          height={200}
        />
      </button>
      <button className="h-10 w-10" onClick={() => changeLanguage("no")}>
        <img
          className={`border ${language === "en" ? "opacity-30" : ""}`}
          src="norway.png"
          alt=""
          width={200}
          height={200}
        />
      </button>
    </div>
  );
};

export default LangSwitcher;
