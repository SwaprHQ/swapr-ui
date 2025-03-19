import { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "@/utils";

export const tagStyles = cva(
  [
    "flex items-center justify-center w-fit",
    "font-medium shadow-secondary-button",
  ],
  {
    variants: {
      size: {
        md: ["h-8 px-2 text-base leading-5 rounded-[10px]"],
        sm: ["h-6 px-1.5 text-sm leading-4 rounded-8"],
        xs: ["h-5 px-1.5 text-xs leading-3 rounded-6"],
      },
      colorScheme: {
        primary: ["bg-surface-primary-med-em text-text-inverse-black-neutral"],
        "primary-light": [
          "bg-surface-primary-base-em-alpha text-text-primary-high-em",
        ],
        "primary-outline": [
          "bg-surface-surface-white-smoke-0 text-text-primary-high-em border border-outline-primary-alpha",
        ],
        secondary: ["bg-surface-surface-2 text-text-med-em"],
        tertiary: ["bg-surface-surface-white-smoke-3 text-text-med-em"],
        success: ["bg-surface-success-base-em-alpha text-text-success-high-em"],
        danger: ["bg-surface-danger-low-em-alpha text-text-danger-high-em"],
        warning: ["bg-surface-warning-base-em-alpha text-text-warning-high-em"],
        info: ["bg-surface-info-base-em-alpha text-text-info-high-em"],
        disabled: ["bg-surface-disabled-low-em text-text-base-em "],
      },
    },
    defaultVariants: {
      size: "xs",
      colorScheme: "primary",
    },
  }
);

export type TagSizeProp = "xs" | "sm" | "md";
export type TagColorSchemeProp =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "danger"
  | "warning"
  | "info";

export interface TagProps {
  size?: TagSizeProp;
  colorScheme?: TagColorSchemeProp;
  className?: string;
  children: ReactNode;
}

export const Tag = ({ children, colorScheme, size, className }: TagProps) => {
  return (
    <div className={twMerge(tagStyles({ size, colorScheme, className }))}>
      {children}
    </div>
  );
};
