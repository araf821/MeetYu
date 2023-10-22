"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  if (!isMounted) return null;

  return (
    <button
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
      className="relative z-20 h-5 w-5 md:h-6 md:w-6"
    >
      <Sun
        className={`absolute right-0 top-0 h-5 w-5 transition-all duration-300 md:h-6 md:w-6 ${
          currentTheme === "light" ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <Moon
        className={`absolute right-0 top-0 h-5 w-5 transition-all duration-300 md:h-6 md:w-6 ${
          currentTheme === "dark" ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;