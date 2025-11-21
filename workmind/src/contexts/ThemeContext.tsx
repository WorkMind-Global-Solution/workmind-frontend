import { createContext, useContext, useState, type ReactNode } from 'react';
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
    return stored ? stored : 'light';
  });

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('workmind-theme', newTheme);
  };

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