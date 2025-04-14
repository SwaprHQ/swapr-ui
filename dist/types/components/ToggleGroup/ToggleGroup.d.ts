import * as _headlessui_react from '@headlessui/react';
import { RadioGroupProps, RadioOptionProps } from '@headlessui/react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';

declare const toggleOptionStyles: (props?: ({
    active?: boolean | null | undefined;
    size?: "lg" | "md" | "sm" | "xs" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ToggleOptionSizeProp = "xs" | "sm" | "md" | "lg";
declare const ToggleGroup: ({ children, className, ...props }: RadioGroupProps<React.ElementType, string>) => react_jsx_runtime.JSX.Element;
declare const ToggleGroupLabel: _headlessui_react._internal_ComponentRadioLabel;
type ToggleOptionProp = RadioOptionProps<React.ElementType, string> & React.PropsWithChildren<{
    size?: ToggleOptionSizeProp;
    className?: string;
}>;
declare const ToggleGroupOption: ({ children, size, className, ...props }: ToggleOptionProp) => react_jsx_runtime.JSX.Element;

export { ToggleGroup, ToggleGroupLabel, ToggleGroupOption, ToggleOptionSizeProp, toggleOptionStyles };
//# sourceMappingURL=ToggleGroup.d.ts.map
