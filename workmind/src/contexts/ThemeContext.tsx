import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { type Theme } from '../types/workmind'; 

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

  useEffect(() => {
    localStorage.setItem('workmind-theme', theme);
    const rootElement = document.documentElement;

    if (theme === 'dark') {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};