import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Content as Content2, Provider, Root as Root3, Arrow as Arrow2, Trigger } from '../../node_modules/@radix-ui/react-tooltip/dist/index.mjs';
import { twMerge } from '../../utils/tw-merge.mjs';

const TooltipProvider = Provider;
const Tooltip = Root3;
const TooltipArrow = Arrow2;
const TooltipTrigger = Trigger;
const TooltipContent = forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: twMerge(
      "z-50 overflow-hidden rounded-12 p-3 text-sm shadow-3 border",
      "text-text-med-em border-outline-base-em bg-surface-surface-0",
      "animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = Content2.displayName;

export { Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipTrigger };
//# sourceMappingURL=Tooltip.mjs.map
