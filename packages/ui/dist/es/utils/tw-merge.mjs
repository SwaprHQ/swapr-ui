import { extendTailwindMerge } from '../node_modules/tailwind-merge/dist/bundle-mjs.mjs';

const roundedClasess = [
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
  "100"
];
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: [{ rounded: roundedClasess }]
    }
  }
});

export { twMerge };
//# sourceMappingURL=tw-merge.mjs.map
