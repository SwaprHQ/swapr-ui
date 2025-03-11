import { ButtonHTMLAttributes, Ref, forwardRef } from "react";

import { twMerge } from "@/utils";

import { buttonStyles } from "./styles";

export type ButtonColorScheme = "main" | "danger" | "success";
export type ButtonVariant =
  | "primary"
  | "light"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "neutral";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  colorScheme?: ButtonColorScheme;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: ButtonVariant;
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
