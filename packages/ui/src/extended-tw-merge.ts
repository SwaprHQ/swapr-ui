import { extendTailwindMerge } from "tailwind-merge";

const preset = require("../tailwind-preset.ts");

console.log("preset: ", preset);

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: [{ rounded: ["100"] }],
    },
  },
});
