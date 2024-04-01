"use client";
import { useState } from "react";
import { LuAlarmCheck, LuAlbum, LuMoon, LuSun } from "react-icons/lu";

const LangSwitcher = () => {
  const [english, setEnglish] = useState(true);

  const toggleLanguage = () => {
    english ? setEnglish(false) : setEnglish(true);
  };

  return (
    <button className="h-6 w-6" onClick={toggleLanguage}>
      {english ? (
        <LuAlarmCheck className=" h-full w-full" />
      ) : (
        <LuAlbum className=" h-full w-full" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default LangSwitcher;
