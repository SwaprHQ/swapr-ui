import * as react from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { ButtonProps } from '../Button/Button.js';
import { IconProps } from '../Icon/Icon.js';

declare const iconButtonStyles: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type Size = NonNullable<ButtonProps["size"]>;
declare const iconSize: Record<Size, number>;
declare const IconButton: react.ForwardRefExoticComponent<ButtonProps & Pick<IconProps, "name"> & react.RefAttributes<HTMLButtonElement>>;

export { IconButton, iconButtonStyles, iconSize };
//# sourceMappingURL=IconButton.d.ts.map
