import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Theme } from '../types/workmind'; 

interface ThemeContextValue {
  theme: Theme; 
  toggleTheme: () => void; 
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('workmind-theme') as Theme | null;
    return stored ?? 'light';
  });

  // Função para alternar entre os estados
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Passa o valor (estado + função) para o Provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
