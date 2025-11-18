import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Theme } from '../types/workmind'; 

interface ThemeContextValue {
  theme: Theme; 
  toggleTheme: () => void; 
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
