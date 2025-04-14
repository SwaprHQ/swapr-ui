import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps } from '../Button/Button.js';

type ButtonLinkProps<T extends React.ElementType> = React.PropsWithChildren<React.ComponentPropsWithoutRef<T> & Pick<ButtonProps, "active" | "colorScheme" | "disabled" | "size" | "variant" | "width"> & {
    as?: T;
}>;
declare function ButtonLink<T extends React.ElementType = "a">({ active, as, className, colorScheme, disabled, size, variant, width, ...props }: ButtonLinkProps<T>): react_jsx_runtime.JSX.Element;

export { ButtonLink, ButtonLinkProps };
//# sourceMappingURL=ButtonLink.d.ts.map
