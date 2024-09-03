import { cva } from "class-variance-authority";
import { twMerge } from "@/utils";

import { ButtonProps, buttonStyles } from "../Button";

export type ButtonLinkProps<T extends React.ElementType> =
  React.PropsWithChildren<
    React.ComponentPropsWithoutRef<T> &
      Pick<
        ButtonProps,
        "active" | "colorScheme" | "disabled" | "size" | "variant" | "width"
      > & {
        as?: T;
      }
  >;

const buttonLinkStyles = cva(["cursor-pointer"], {
  variants: {
    colorScheme: {
      primary: [],
      error: [],
      success: [],
    },
    variant: {
      solid: [],
      pastel: [],
      outline: [],
      ghost: [],
    },
    active: {
      true: [],
    },
    disabled: {
      true: ["text-text-disabled pointer-events-none ring-0"],
    },
  },
  compoundVariants: [
    {
      colorScheme: "primary",
      variant: "outline",
      class: "text-inherit",
    },
    {
      colorScheme: "primary",
      variant: "ghost",
      class: "text-inherit",
    },
    {
      colorScheme: "success",
      variant: "solid",
      class: "text-inherit",
    },
    {
      colorScheme: "success",
      active: true,
      class: "text-inherit",
    },
    {
      disabled: true,
      variant: "ghost",
      class: ["bg-inherit text-text-disabled"],
    },
    {
      disabled: true,
      variant: ["solid", "outline", "pastel"],
      class: ["bg-surface-disabled-low-em text-text-disabled"],
    },
    {
      colorScheme: ["primary", "error", "success"],
      variant: "ghost",
      class: "bg-inherit",
    },
  ],
  defaultVariants: {
    active: false,
    disabled: false,
    colorScheme: "primary",
    variant: "solid",
  },
});

const DEFAULT_ELEMENT = "a";

export function ButtonLink<T extends React.ElementType = "a">({
  active,
  as,
  className,
  colorScheme,
  disabled,
  size,
  variant,
  width,
  ...props
}: ButtonLinkProps<T>) {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      className={twMerge(
        buttonStyles({
          active,
          colorScheme,
          size,
          variant,
          width,
        }),
        buttonLinkStyles({
          active,
          colorScheme,
          disabled,
          variant,
        }),
        className
      )}
      tabIndex={0}
      {...props}
    />
  );
}
