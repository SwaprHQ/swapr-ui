import { PopoverContentProps } from "@radix-ui/react-popover";
declare const Popover: import("react").FC<import("@radix-ui/react-popover").PopoverProps>;
declare const PopoverTrigger: import("react").ForwardRefExoticComponent<import("@radix-ui/react-popover").PopoverTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: import("react").ForwardRefExoticComponent<PopoverContentProps & import("react").RefAttributes<HTMLDivElement>>;
interface PopoverContentHeaderProps {
    className?: string;
    title?: string;
}
declare const PopoverContentHeader: ({ className, title, }: PopoverContentHeaderProps) => import("react/jsx-runtime").JSX.Element;
export { Popover, PopoverContent, PopoverContentHeader, PopoverTrigger };
//# sourceMappingURL=Popover.d.ts.map