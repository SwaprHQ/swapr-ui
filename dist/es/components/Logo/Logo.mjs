import { jsx } from 'react/jsx-runtime';
import { cva } from '../../node_modules/class-variance-authority/dist/index.mjs';
import { twMerge } from '../../utils/tw-merge.mjs';

const logoStyles = cva(
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
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      className: twMerge(logoStyles({ size, className })),
      alt,
      width: 54,
      height: 54
    }
  );
};

export { Logo, logoStyles };
//# sourceMappingURL=Logo.mjs.map
