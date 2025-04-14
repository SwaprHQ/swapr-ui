'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../node_modules/@radix-ui/react-tooltip/dist/index.cjs');
var twMerge = require('../../utils/tw-merge.cjs');

const TooltipProvider = index.Provider;
const Tooltip = index.Root;
const TooltipArrow = index.Arrow;
const TooltipTrigger = index.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  index.Content,
  {
    ref,
    sideOffset,
    className: twMerge.twMerge(
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
TooltipContent.displayName = index.Content.displayName;

exports.Tooltip = Tooltip;
exports.TooltipArrow = TooltipArrow;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
//# sourceMappingURL=Tooltip.cjs.map
