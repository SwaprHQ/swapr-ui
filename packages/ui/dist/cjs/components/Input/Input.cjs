'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index$1 = require('../../node_modules/@radix-ui/react-label/dist/index.cjs');
var index = require('../../node_modules/class-variance-authority/dist/index.cjs');
var Icon = require('../Icon/Icon.cjs');

const inputStyles = index.cva(
  [
    "flex w-full items-center text-text-high-em",
    "border-outline-med-em",
    "group-has-disabled:cursor-not-allowed group-has-disabled:text-text-disabled group-has-disabled:bg-surface-surface-1 group-has-disabled:shadow-none group-has-disabled:border-transparent",
    "group-has-invalid:shadow-focus-danger"
  ],
  {
    variants: {
      size: {
        sm: "text-sm space-x-1 px-2 rounded-8 h-8",
        md: "text-[13px] space-x-2 px-3 rounded-[10px] h-9",
        lg: "text-[15px] space-x-3 px-4 rounded-12 h-12",
        xl: "text-[18px] space-x-3 px-4 rounded-16 h-14"
      },
      variant: {
        secondary: "bg-surface-surface-smoke-gray text-text-med-em placeholder:text-text-disabled focus-within:shadow-focus-gray",
        tertiary: "bg-surface-primary-base-em-alpha text-text-primary-em placeholder:text-text-primary-med focus-within:shadow-focus-primary",
        primary: "bg-surface-primary-accent-1 text-text-primary-em placeholder:text-text-primary-med focus-within:shadow-focus-primary border border-surface-primary-med-em",
        ghost: "bg-surface-surface-0 text-text-high-em focus-within:shadow-2"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "secondary"
    }
  }
);
const inputFieldStyles = index.cva(
  ["bg-inherit group-has-disabled:placeholder:text-text-base-em"],
  {
    variants: {
      variant: {
        secondary: "placeholder:text-text-low-em",
        primary: "placeholder:text-text-primary-med-em",
        tertiary: "placeholder:text-text-primary-med-em",
        ghost: "placeholder:text-text-low-em"
      }
    },
    defaultVariants: { variant: "secondary" }
  }
);
const iconSize = {
  sm: 14,
  md: 18,
  lg: 20,
  xl: 24
};
const Input = React.forwardRef(
  ({
    className,
    id,
    label,
    message,
    leftIcon,
    rightIcon,
    size = "md",
    variant,
    isInvalid,
    ...props
  }) => {
    const inputRef = React.useRef(null);
    React.useEffect(() => {
      if (isInvalid && message) inputRef.current?.setCustomValidity(message);
      else inputRef.current?.setCustomValidity("");
    }, [isInvalid, message]);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: index.cx("group", className), children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(
        index$1.Root,
        {
          className: index.cx([
            "text-sm text-text-low-em",
            "group-has-disabled:text-text-base-em"
          ]),
          htmlFor: id,
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: inputStyles({ size, variant }),
          onClick: () => {
            if (inputRef.current) inputRef.current.focus();
          },
          onDoubleClick: () => {
            if (inputRef.current) inputRef.current.select();
          },
          children: [
            leftIcon && /* @__PURE__ */ jsxRuntime.jsx(
              Icon.Icon,
              {
                size: iconSize[size],
                name: leftIcon,
                className: "text-text-med-em"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              InputField,
              {
                className: inputFieldStyles({ variant }),
                ref: inputRef,
                id,
                ...props
              }
            ),
            rightIcon && /* @__PURE__ */ jsxRuntime.jsx(
              Icon.Icon,
              {
                size: iconSize[size],
                name: rightIcon,
                className: "text-text-med-em"
              }
            )
          ]
        }
      ),
      message && /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: index.cx([
            "flex space-x-1 mt-2",
            "group-has-disabled:text-text-base-em",
            "group-has-invalid:text-text-danger-high-em"
          ]),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(Icon.Icon, { size: 14, name: "info-fill" }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-text-med-em group-has-disabled:text-text-base-em", children: message })
          ]
        }
      )
    ] });
  }
);
Input.displayName = "Input";
const InputField = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      className: index.cx(
        "focus:outline-hidden bg-transparent w-full disabled:cursor-not-allowed disabled:text-text-low-em",
        className
      ),
      ref,
      ...props
    }
  );
});
InputField.displayName = "InputField";

exports.Input = Input;
exports.InputField = InputField;
//# sourceMappingURL=Input.cjs.map
