"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

const ThemeSwitcher = () => {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <button className="h-6 w-6 mt-2" onClick={toggleTheme} disabled={!mounted}>
      {mounted && resolvedTheme === "light" ? (
        <LuMoon className=" h-full w-full" />
      ) : (
        <LuSun className=" h-full w-full" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeSwitcher;