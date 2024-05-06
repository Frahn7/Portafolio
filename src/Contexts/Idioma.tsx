"use client";

import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const useIdioma = () => {
  const values = useContext(Idioma);
  if (values === null) throw new Error(".");
  return values;
};

export const Idioma = createContext<{
  Idioma: string;
  setIdioma: (newIdioma: string) => void;
} | null>(null);

export const IdiomaProvider = ({ children }: Props) => {
  const [ContextData, setContextData] = useState("ES");

  const setIdioma = (newIdioma: string) => {
    return setContextData(newIdioma);
  };

  return (
    <Idioma.Provider value={{ Idioma: ContextData, setIdioma }}>
      {children}
    </Idioma.Provider>
  );
};
