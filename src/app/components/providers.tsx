"use client";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { createContext } from "react";
import { LangProvider } from "./langContext";

export default function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <LangProvider>
      <ThemeProvider {...props}>{children}</ThemeProvider>
    </LangProvider>
  );
}
