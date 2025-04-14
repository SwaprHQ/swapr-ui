import { ButtonHTMLAttributes } from "react";
export declare const chipButtonStyles: (props?: ({
    size?: "md" | "sm" | "xs" | null | undefined;
    colorScheme?: "main" | "neutral" | null | undefined;
    active?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ChipButtonsColorScheme = "main" | "neutral";
export type ChipButtonsSizes = "xs" | "sm" | "md";
export interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    colorScheme?: ChipButtonsColorScheme;
    size?: ChipButtonsSizes;
    disabled?: boolean;
    active?: boolean;
}
export declare const ChipButton: import("react").ForwardRefExoticComponent<ChipButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=ChipButton.d.ts.map