"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button className="h-6 w-6" onClick={toggleTheme}>
      {theme === "light" ? (
        <LuMoon className=" h-full w-full" />
      ) : (
        <LuSun className=" h-full w-full" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeSwitcher;
