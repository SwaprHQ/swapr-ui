import { extendTailwindMerge } from "tailwind-merge";

const newRoundedClasess = [
  "0",
  "4",
  "6",
  "8",
  "12",
  "16",
  "20",
  "32",
  "48",
  "64",
  "100",
];

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: [{ rounded: newRoundedClasess }],
    },
  },
});
