import { ButtonProps } from "../Button";
export type ButtonLinkProps<T extends React.ElementType> = React.PropsWithChildren<React.ComponentPropsWithoutRef<T> & Pick<ButtonProps, "active" | "colorScheme" | "disabled" | "size" | "variant" | "width"> & {
    as?: T;
}>;
export declare function ButtonLink<T extends React.ElementType = "a">({ active, as, className, colorScheme, disabled, size, variant, width, ...props }: ButtonLinkProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ButtonLink.d.ts.map