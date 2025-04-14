'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index = require('../../node_modules/class-variance-authority/dist/index.cjs');
var twMerge = require('../../utils/tw-merge.cjs');
require('../Button/Button.cjs');
var styles = require('../Button/styles.cjs');

const buttonLinkStyles = index.cva(["cursor-pointer"], {
  variants: {
    colorScheme: {
      main: [],
      danger: [],
      success: []
    },
    variant: {
      primary: [],
      light: [],
      secondary: [],
      tertiary: [],
      ghost: [],
      neutral: []
    },
    active: {
      true: []
    },
    disabled: {
      true: [
        "bg-surface-disabled-base-em hover:bg-surface-disabled-base-em cursor-not-allowed text-text-base-em",
        "shadow-none focus-visible:shadow-none active:shadow-none focus-visible:ring-0 active:ring-0"
      ]
    }
  },
  compoundVariants: [
    {
      disabled: true,
      variant: "ghost",
      class: [
        "bg-inherit hover:bg-inherit",
        "shadow-none focus-visible:shadow-none active:shadow-none focus-visible:ring-0 active:ring-0"
      ]
    }
  ]
});
const DEFAULT_ELEMENT = "a";
function ButtonLink({
  active,
  as,
  className,
  colorScheme,
  disabled,
  size,
  variant,
  width,
  ...props
}) {
  const Component = as || DEFAULT_ELEMENT;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Component,
    {
      className: twMerge.twMerge(
        styles.buttonStyles({
          active,
          colorScheme,
          size,
          variant,
          width
        }),
        buttonLinkStyles({
          active,
          colorScheme,
          disabled,
          variant
        }),
        className
      ),
      tabIndex: 0,
      ...props
    }
  );
}

exports.ButtonLink = ButtonLink;
//# sourceMappingURL=ButtonLink.cjs.map
