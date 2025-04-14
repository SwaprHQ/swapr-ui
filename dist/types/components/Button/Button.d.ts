import * as react from 'react';
import { ButtonHTMLAttributes } from 'react';

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonColorScheme = "main" | "danger" | "success";
type ButtonVariant = "primary" | "light" | "secondary" | "tertiary" | "ghost" | "neutral";
type ButtonWidth = "normal" | "fit" | "full";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    colorScheme?: ButtonColorScheme;
    disabled?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    width?: ButtonWidth;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

export { Button, ButtonColorScheme, ButtonProps, ButtonSize, ButtonVariant, ButtonWidth };
//# sourceMappingURL=Button.d.ts.map
