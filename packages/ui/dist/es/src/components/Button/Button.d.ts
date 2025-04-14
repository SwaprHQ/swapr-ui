import { ButtonHTMLAttributes } from "react";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonColorScheme = "main" | "danger" | "success";
export type ButtonVariant = "primary" | "light" | "secondary" | "tertiary" | "ghost" | "neutral";
export type ButtonWidth = "normal" | "fit" | "full";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    colorScheme?: ButtonColorScheme;
    disabled?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    width?: ButtonWidth;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map