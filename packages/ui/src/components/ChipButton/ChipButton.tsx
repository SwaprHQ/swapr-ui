import { ButtonHTMLAttributes, Ref, forwardRef } from "react";

import { cva, cx } from "class-variance-authority";

export const chipButtonStyles = cva(
  [
    "flex items-center justify-center gap-1 shrink-0 border border-outline-med-em",
    "select-none font-medium rounded-100 text-nowrap",
    "disabled:text-text-base-em disabled:cursor-not-allowed disabled:ring-0 disabled:shadow-none disabled:bg-surface-disabled-low-em disabled:border-0",
    "hover:bg-surface-surface-2",
    "focus:outline-none",
  ],
  {
    variants: {
      size: {
        md: "px-3 space-x-2 h-10",
        sm: "px-2 space-x-[6px] h-8 text-sm",
        xs: "px-1.5 h-6 text-xs",
      },
      colorScheme: {
        main: [],
        neutral: [],
      },
      active: {
        false: [
          "text-text-med-em bg-surface-surface-white-smoke-3 shadow-special-drop focus:shadow-focus-gray",
        ],
      },
    },
    compoundVariants: [
      {
        active: true,
        colorScheme: "main",
        class: [
          "ring-outline-primary-alpha shadow-focus-primary text-text-primary-high-em border-outline-base-em border-2",
          "hover:shadow-special-drop hover:ring-2",
        ],
      },
      {
        active: false,
        colorScheme: "main",
        class: ["border-outline-secondary-special-bottom"],
      },
      {
        active: true,
        colorScheme: "neutral",
        class: [
          "bg-surface-surface-2 shadow-special-drop text-text-high-em",
          "hover:bg-surface-surface-3 hover:shadow-special-drop",
          "dark:shadow-focus-gray",
        ],
      },
    ],
    defaultVariants: {
      active: false,
      colorScheme: "main",
      size: "md",
    },
  }
);

export type ChipButtonsColorScheme = "main" | "neutral";
export type ChipButtonsSizes = "xs" | "sm" | "md";
export interface ChipButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: ChipButtonsColorScheme;
  size?: ChipButtonsSizes;
  disabled?: boolean;
  active?: boolean;
}

export const ChipButton = forwardRef(
  (
    {
      children,
      size,
      colorScheme,
      active,
      className,
      ...props
    }: ChipButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      className={cx(
        chipButtonStyles({
          size,
          colorScheme,
          active,
          className,
        })
      )}
      {...props}
    >
      {children}
    </button>
  )
);
