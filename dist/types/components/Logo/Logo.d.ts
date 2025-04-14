import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';

declare const logoStyles: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type LogoSizeProp = "xs" | "sm" | "md" | "lg" | "xl";
interface LogoProps {
    className?: string;
    size?: LogoSizeProp;
    src: string;
    alt: string;
}
declare const Logo: ({ src, className, size, alt }: LogoProps) => react_jsx_runtime.JSX.Element;

export { Logo, LogoSizeProp, logoStyles };
//# sourceMappingURL=Logo.d.ts.map
