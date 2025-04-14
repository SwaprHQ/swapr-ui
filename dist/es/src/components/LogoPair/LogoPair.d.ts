import { LogoSizeProp } from "../Logo";
export declare const logoPairStyles: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | null | undefined;
    variant?: "balance" | "highlight" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export declare const logoPairLogoStyles: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | null | undefined;
    variant?: "balance" | "highlight" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type LogoPairVariant = "balance" | "highlight";
interface LogoPairProps {
    logoASrc: string;
    logoBSrc: string;
    size?: LogoSizeProp;
    alt: string;
    variant?: LogoPairVariant;
}
export declare const LogoPair: ({ logoASrc, logoBSrc, size, alt, variant, }: LogoPairProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LogoPair.d.ts.map