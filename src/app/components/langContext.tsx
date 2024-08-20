import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the type for the context value
interface LangContextType {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

// Create the context
const LangContext = createContext<LangContextType | undefined>(undefined);

// Custom hook to use the LangContext
export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

// LangProvider component
interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LangContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
