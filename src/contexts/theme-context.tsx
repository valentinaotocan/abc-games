import { createContext, useState, useEffect } from "react";

interface ThemeProviderType {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: "light" | "dark" | null;
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? (savedTheme as "light" | "dark") : "dark";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (!theme) {
      setTheme("dark");
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
