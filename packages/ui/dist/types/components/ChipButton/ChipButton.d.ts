import * as react from 'react';
import { ButtonHTMLAttributes } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';

declare const chipButtonStyles: (props?: ({
    size?: "md" | "sm" | "xs" | null | undefined;
    colorScheme?: "main" | "neutral" | null | undefined;
    active?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ChipButtonsColorScheme = "main" | "neutral";
type ChipButtonsSizes = "xs" | "sm" | "md";
interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    colorScheme?: ChipButtonsColorScheme;
    size?: ChipButtonsSizes;
    disabled?: boolean;
    active?: boolean;
}
declare const ChipButton: react.ForwardRefExoticComponent<ChipButtonProps & react.RefAttributes<HTMLButtonElement>>;

export { ChipButton, ChipButtonProps, ChipButtonsColorScheme, ChipButtonsSizes, chipButtonStyles };
//# sourceMappingURL=ChipButton.d.ts.map
