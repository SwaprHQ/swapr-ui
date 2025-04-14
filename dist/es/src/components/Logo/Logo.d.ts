export declare const logoStyles: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type LogoSizeProp = "xs" | "sm" | "md" | "lg" | "xl";
interface LogoProps {
    className?: string;
    size?: LogoSizeProp;
    src: string;
    alt: string;
}
export declare const Logo: ({ src, className, size, alt }: LogoProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Logo.d.ts.map