'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('@headlessui/react');
var index = require('../../node_modules/class-variance-authority/dist/index.cjs');
var twMerge = require('../../utils/tw-merge.cjs');

const toggleOptionStyles = index.cva(
  [
    "flex items-center py-2 font-medium leading-5 rounded-12",
    "outline-hidden cursor-pointer"
  ],
  {
    variants: {
      active: {
        true: ["bg-surface-surface-0 shadow-2"],
        false: ["hover:bg-surface-surface-1 hover:shadow-1"]
      },
      size: {
        lg: ["py-3 px-4 text-md"],
        md: ["py-2 px-3 text-base"],
        sm: ["py-2 px-2 text-sm"],
        xs: ["py-1 px-2 text-2xs"]
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
);
const ToggleGroup = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    react.RadioGroup,
    {
      className: twMerge.twMerge(
        "flex space-x-1 rounded-12 bg-surface-surface-2 p-[4px] w-auto md:w-fit",
        className
      ),
      ...props,
      children
    }
  );
};
const ToggleGroupLabel = react.RadioGroup.Label;
const ToggleGroupOption = ({
  children,
  size,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(react.Radio, { ...props, children: ({ checked }) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: twMerge.twMerge(
        toggleOptionStyles({ active: checked, size }),
        className
      ),
      children
    }
  ) });
};

exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupLabel = ToggleGroupLabel;
exports.ToggleGroupOption = ToggleGroupOption;
exports.toggleOptionStyles = toggleOptionStyles;
//# sourceMappingURL=ToggleGroup.cjs.map
