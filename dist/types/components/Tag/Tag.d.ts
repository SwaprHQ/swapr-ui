import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { ReactNode } from 'react';

declare const tagStyles: (props?: ({
    size?: "md" | "sm" | "xs" | null | undefined;
    colorScheme?: "primary" | "light" | "outline" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "disabled" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type TagSizeProp = "xs" | "sm" | "md";
type TagColorSchemeProp = "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" | "outline" | "light";
interface TagProps {
    size?: TagSizeProp;
    colorScheme?: TagColorSchemeProp;
    className?: string;
    children: ReactNode;
}
declare const Tag: ({ children, colorScheme, size, className }: TagProps) => react_jsx_runtime.JSX.Element;

export { Tag, TagColorSchemeProp, TagProps, TagSizeProp, tagStyles };
//# sourceMappingURL=Tag.d.ts.map
