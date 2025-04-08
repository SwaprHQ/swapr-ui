/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./tailwind-preset.ts")],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-[a-z0-9-]*/,
    },
    {
      pattern: /^text-(2xs|xs|sm|base|md|lg|xl|2xl|3xl)$/,
      variants: ["hover", "focus", "dark"],
    },
  ],
  theme: {
    extend: {},
  },
};
