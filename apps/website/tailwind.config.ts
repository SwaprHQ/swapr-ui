/** @type {import('tailwindcss').Config} */

import { Config, RecursiveKeyValuePair } from "tailwindcss/types/config";

const config: Config & {
  theme: { colors?: RecursiveKeyValuePair };
} = {
  presets: [require("../../packages/ui/tailwind-preset")],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-[a-z0-9-]*/,
    },
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
    },
  },
};

export default config;
