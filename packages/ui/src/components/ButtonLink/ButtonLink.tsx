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
      main: [],
      danger: [],
      success: [],
    },
    variant: {
      primary: [],
      light: [],
      secondary: [],
      tertiary: [],
      ghost: [],
      neutral: [],
    },
    active: {
      true: [],
    },
    disabled: {
      true: [
        "bg-surface-disabled-base-em hover:bg-surface-disabled-base-em cursor-not-allowed text-text-base-em",
        "shadow-none focus-visible:shadow-none active:shadow-none focus-visible:ring-0 active:ring-0",
      ],
    },
  },
  compoundVariants: [
    {
      disabled: true,
      variant: "ghost",
      class: [
        "bg-inherit hover:bg-inherit",
        "shadow-none focus-visible:shadow-none active:shadow-none focus-visible:ring-0 active:ring-0",
      ],
    },
  ],
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
