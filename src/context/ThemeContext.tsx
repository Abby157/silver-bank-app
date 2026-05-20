import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import type {
  ReactNode,
} from "react";

interface ThemeContextType {
  darkMode: boolean;

  toggleTheme: () => void;
}

const ThemeContext =
  createContext<ThemeContextType | null>(
    null
  );

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [darkMode, setDarkMode] =
    useState(true);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);

      document.body.classList.add(
        "light-mode"
      );
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.add(
        "light-mode"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    } else {
      document.body.classList.remove(
        "light-mode"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    }

    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}