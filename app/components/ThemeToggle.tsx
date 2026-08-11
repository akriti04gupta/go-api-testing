"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );

    setDark(isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = dark ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);

    setDark(nextTheme === "dark");
  };

  // Prevent hydration mismatch while the browser determines the theme.
  if (!mounted) {
    return (
      <button
        type="button"
        className="h-9 w-9 rounded-lg border border-[var(--border)]"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition hover:bg-[var(--muted)] hover:text-[var(--text)]"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}