'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../node_modules/class-variance-authority/dist/index.cjs');
var Button = require('../Button/Button.cjs');
var Icon = require('../Icon/Icon.cjs');

const iconButtonStyles = index.cva(["p-0"], {
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
const IconButton = React.forwardRef(
  ({
    className,
    size = "md",
    name,
    ...props
  }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Button.Button,
    {
      className: iconButtonStyles({ className, size }),
      ...props,
      ref,
      children: /* @__PURE__ */ jsxRuntime.jsx(Icon.Icon, { size: iconSize[size], name, className: "shrink-0" })
    }
  )
);

exports.IconButton = IconButton;
exports.iconButtonStyles = iconButtonStyles;
exports.iconSize = iconSize;
//# sourceMappingURL=IconButton.cjs.map
