import { ReactNode } from "react";
export declare const tagStyles: (props?: ({
    size?: "md" | "sm" | "xs" | null | undefined;
    colorScheme?: "primary" | "light" | "outline" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "disabled" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type TagSizeProp = "xs" | "sm" | "md";
export type TagColorSchemeProp = "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "outline" | "light";
export interface TagProps {
    size?: TagSizeProp;
    colorScheme?: TagColorSchemeProp;
    className?: string;
    children: ReactNode;
}
export declare const Tag: ({ children, colorScheme, size, className }: TagProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Tag.d.ts.map