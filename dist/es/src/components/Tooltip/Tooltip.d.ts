export type TooltipProviderProps = {
    children: React.ReactNode;
    /**
     * The duration from when the pointer enters the trigger until the tooltip gets opened.
     * @defaultValue 700
     */
    delayDuration?: number;
    /**
     * How much time a user has to enter another trigger without incurring a delay again.
     * @defaultValue 300
     */
    skipDelayDuration?: number;
    /**
     * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @defaultValue false
     */
    disableHoverableContent?: boolean;
};
declare const TooltipProvider: React.FC<TooltipProviderProps>;
declare const Tooltip: import("react").FC<import("@radix-ui/react-tooltip").TooltipProps>;
declare const TooltipArrow: import("react").ForwardRefExoticComponent<import("@radix-ui/react-tooltip").TooltipArrowProps & import("react").RefAttributes<SVGSVGElement>>;
declare const TooltipTrigger: import("react").ForwardRefExoticComponent<import("@radix-ui/react-tooltip").TooltipTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: import("react").ForwardRefExoticComponent<Omit<import("@radix-ui/react-tooltip").TooltipContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export { Tooltip, TooltipArrow, TooltipTrigger, TooltipContent, TooltipProvider, };
//# sourceMappingURL=Tooltip.d.ts.map