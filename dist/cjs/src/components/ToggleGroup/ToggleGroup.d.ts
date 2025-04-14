import { RadioGroupProps, RadioOptionProps } from "@headlessui/react";
export declare const toggleOptionStyles: (props?: ({
    active?: boolean | null | undefined;
    size?: "lg" | "md" | "sm" | "xs" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ToggleOptionSizeProp = "xs" | "sm" | "md" | "lg";
export declare const ToggleGroup: ({ children, className, ...props }: RadioGroupProps<React.ElementType, string>) => import("react/jsx-runtime").JSX.Element;
export declare const ToggleGroupLabel: import("@headlessui/react")._internal_ComponentRadioLabel;
type ToggleOptionProp = RadioOptionProps<React.ElementType, string> & React.PropsWithChildren<{
    size?: ToggleOptionSizeProp;
    className?: string;
}>;
export declare const ToggleGroupOption: ({ children, size, className, ...props }: ToggleOptionProp) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ToggleGroup.d.ts.map