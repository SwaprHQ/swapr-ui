import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { LogoSizeProp } from '../Logo/Logo.js';

declare const logoPairStyles: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | null | undefined;
    variant?: "balance" | "highlight" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const logoPairLogoStyles: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | null | undefined;
    variant?: "balance" | "highlight" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type LogoPairVariant = "balance" | "highlight";
interface LogoPairProps {
    logoASrc: string;
    logoBSrc: string;
    size?: LogoSizeProp;
    alt: string;
    variant?: LogoPairVariant;
}
declare const LogoPair: ({ logoASrc, logoBSrc, size, alt, variant, }: LogoPairProps) => react_jsx_runtime.JSX.Element;

export { LogoPair, LogoPairVariant, logoPairLogoStyles, logoPairStyles };
//# sourceMappingURL=LogoPair.d.ts.map
