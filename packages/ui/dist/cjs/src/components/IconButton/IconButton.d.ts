import { ButtonProps } from "../Button";
import { IconProps } from "../Icon";
export declare const iconButtonStyles: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type Size = NonNullable<ButtonProps["size"]>;
export declare const iconSize: Record<Size, number>;
export declare const IconButton: import("react").ForwardRefExoticComponent<ButtonProps & Pick<IconProps, "name"> & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=IconButton.d.ts.map