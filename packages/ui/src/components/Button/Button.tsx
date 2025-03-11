import { ButtonHTMLAttributes, Ref, forwardRef } from "react";

import { twMerge } from "@/utils";

import { buttonStyles } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  colorScheme?: "main" | "danger" | "success";
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "light"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "neutral";
  width?: "normal" | "fit" | "full";
}

export const Button = forwardRef(
  (
    {
      active,
      children,
      className,
      colorScheme,
      size,
      variant,
      width,
      ...props
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        className={twMerge(
          buttonStyles({
            active,
            className,
            colorScheme,
            size,
            variant,
            width,
          })
        )}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
