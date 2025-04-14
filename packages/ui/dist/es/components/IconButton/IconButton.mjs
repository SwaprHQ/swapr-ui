import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { cva } from '../../node_modules/class-variance-authority/dist/index.mjs';
import { Button } from '../Button/Button.mjs';
import { Icon } from '../Icon/Icon.mjs';

const iconButtonStyles = cva(["p-0"], {
  variants: {
    size: {
      xs: "size-7 rounded-8",
      sm: "size-8 rounded-8",
      md: "size-10 rounded-10",
      lg: "size-12 rounded-14",
      xl: "size-14 rounded-14"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
const iconSize = {
  xs: 18,
  sm: 22,
  md: 26,
  lg: 30,
  xl: 36
};
const IconButton = forwardRef(
  ({
    className,
    size = "md",
    name,
    ...props
  }, ref) => /* @__PURE__ */ jsx(
    Button,
    {
      className: iconButtonStyles({ className, size }),
      ...props,
      ref,
      children: /* @__PURE__ */ jsx(Icon, { size: iconSize[size], name, className: "shrink-0" })
    }
  )
);

export { IconButton, iconButtonStyles, iconSize };
//# sourceMappingURL=IconButton.mjs.map
