import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "agency-dark") {
      document.documentElement.classList.add("agency-dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("agency-dark");
      setDark(false);
    }
  }, []);

  // Toggle theme
  const toggle = () => {
    const root = document.documentElement;

    if (dark) {
      root.classList.remove("agency-dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      root.classList.add("agency-dark");
      localStorage.setItem("theme", "agency-dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-[99999] flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white shadow-lg transition hover:scale-105"
    >
      {dark ? "🌙 Night" : "☀️ Day"}
    </button>
  );
}