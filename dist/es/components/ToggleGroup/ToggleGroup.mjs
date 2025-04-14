import { jsx } from 'react/jsx-runtime';
import { RadioGroup, Radio } from '@headlessui/react';
import { cva } from '../../node_modules/class-variance-authority/dist/index.mjs';
import { twMerge } from '../../utils/tw-merge.mjs';

const toggleOptionStyles = cva(
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
  return /* @__PURE__ */ jsx(
    RadioGroup,
    {
      className: twMerge(
        "flex space-x-1 rounded-12 bg-surface-surface-2 p-[4px] w-auto md:w-fit",
        className
      ),
      ...props,
      children
    }
  );
};
const ToggleGroupLabel = RadioGroup.Label;
const ToggleGroupOption = ({
  children,
  size,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Radio, { ...props, children: ({ checked }) => /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge(
        toggleOptionStyles({ active: checked, size }),
        className
      ),
      children
    }
  ) });
};

export { ToggleGroup, ToggleGroupLabel, ToggleGroupOption, toggleOptionStyles };
//# sourceMappingURL=ToggleGroup.mjs.map
