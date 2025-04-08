import {
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioOptionProps,
} from "@headlessui/react";
import { cva } from "class-variance-authority";
import { twMerge } from "@/utils";

export const toggleOptionStyles = cva(
  [
    "flex items-center py-2 font-medium leading-5 rounded-12",
    "outline-none cursor-pointer",
  ],
  {
    variants: {
      active: {
        true: ["bg-surface-surface-0 shadow-2"],
        false: ["hover:bg-surface-surface-1 hover:shadow-1"],
      },
      size: {
        lg: ["py-3 px-4 text-md"],
        md: ["py-2 px-3 text-base"],
        sm: ["py-2 px-2 text-sm"],
        xs: ["py-1 px-2 text-2xs"],
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export type ToggleOptionSizeProp = "xs" | "sm" | "md" | "lg";

export const ToggleGroup = ({
  children,
  className,
  ...props
}: RadioGroupProps<React.ElementType, string>) => {
  return (
    <RadioGroup
      className={twMerge(
        "flex space-x-1 rounded-12 bg-surface-surface-2 p-[4px] w-auto md:w-fit",
        className
      )}
      {...props}
    >
      {children}
    </RadioGroup>
  );
};

export const ToggleGroupLabel = RadioGroup.Label;

type ToggleOptionProp = RadioOptionProps<React.ElementType, string> &
  React.PropsWithChildren<{
    size?: ToggleOptionSizeProp;
    className?: string;
  }>;

export const ToggleGroupOption = ({
  children,
  size,
  className,
  ...props
}: ToggleOptionProp) => {
  return (
    <Radio {...props}>
      {({ checked }) => (
        <div
          className={twMerge(
            toggleOptionStyles({ active: checked, size }),
            className
          )}
        >
          {children}
        </div>
      )}
    </Radio>
  );
};
