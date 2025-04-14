'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index = require('../../node_modules/class-variance-authority/dist/index.cjs');
var twMerge = require('../../utils/tw-merge.cjs');

const logoStyles = index.cva(
  ["flex items-center justify-center", "rounded-100 bg-surface-white"],
  {
    variants: {
      size: {
        xl: ["size-12"],
        lg: ["size-10"],
        md: ["size-8"],
        sm: ["size-6"],
        xs: ["size-5"]
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
);
const Logo = ({ src, className, size, alt }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "img",
    {
      src,
      className: twMerge.twMerge(logoStyles({ size, className })),
      alt,
      width: 54,
      height: 54
    }
  );
};

exports.Logo = Logo;
exports.logoStyles = logoStyles;
//# sourceMappingURL=Logo.cjs.map
