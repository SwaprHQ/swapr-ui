"use client";

import { useTheme } from "next-themes";
import { useShowClientUI } from "@/hooks";

export const ThemeSwitch = () => {
  const showClientUI = useShowClientUI();
  const { theme, setTheme } = useTheme();

  if (!showClientUI) {
    return null;
  }

  return (
    <select
      value={theme}
      onChange={e => setTheme(e.target.value)}
      className="border rounded-16 border-outline-med-em bg-neutral-inverse-black-alpha-24 text-sm py-1 px-2"
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};
