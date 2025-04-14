import * as react from 'react';
import * as _radix_ui_react_tooltip from '@radix-ui/react-tooltip';

type TooltipProviderProps = {
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
declare const Tooltip: react.FC<_radix_ui_react_tooltip.TooltipProps>;
declare const TooltipArrow: react.ForwardRefExoticComponent<_radix_ui_react_tooltip.TooltipArrowProps & react.RefAttributes<SVGSVGElement>>;
declare const TooltipTrigger: react.ForwardRefExoticComponent<_radix_ui_react_tooltip.TooltipTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: react.ForwardRefExoticComponent<Omit<_radix_ui_react_tooltip.TooltipContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipProviderProps, TooltipTrigger };
//# sourceMappingURL=Tooltip.d.ts.map
