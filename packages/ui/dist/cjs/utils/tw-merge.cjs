'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bundleMjs = require('../node_modules/tailwind-merge/dist/bundle-mjs.cjs');

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
const twMerge = bundleMjs.extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: [{ rounded: roundedClasess }]
    }
  }
});

exports.twMerge = twMerge;
//# sourceMappingURL=tw-merge.cjs.map
