"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your context's value
interface GlobalContextType {
  isMenuOpen: boolean;
  toggleMenu: (b: boolean) => void;
}

// Create the context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <GlobalContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for accessing the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
