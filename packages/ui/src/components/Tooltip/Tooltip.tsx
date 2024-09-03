import { forwardRef } from "react";

import {
  Arrow,
  Content,
  Provider,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";
import { twMerge } from "@/utils";

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
const TooltipProvider: React.FC<TooltipProviderProps> = Provider;

const Tooltip = Root;

const TooltipArrow = Arrow;

const TooltipTrigger = Trigger;

const TooltipContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    ref={ref}
    sideOffset={sideOffset}
    className={twMerge(
      "z-50 overflow-hidden rounded-12 p-3 text-sm shadow-3 border",
      "text-text-med-em border-outline-base-em bg-surface-special-bg-neutral",
      "animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = Content.displayName;

export {
  Tooltip,
  TooltipArrow,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
};
