import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { type Theme } from '../types/workmind'; 

interface ThemeContextValue {
  isDark: boolean; 
  theme: Theme;    
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('workmind-theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (stored) return stored;
    return prefersDark ? 'dark' : 'light';
  });

  const isDark = theme === 'dark';

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

    rootElement.classList.remove('light-mode', 'dark-mode'); 
    
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
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