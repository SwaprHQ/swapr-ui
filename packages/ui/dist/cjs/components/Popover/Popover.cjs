'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../node_modules/@radix-ui/react-popover/dist/index.cjs');
var twMerge = require('../../utils/tw-merge.cjs');
var IconButton = require('../IconButton/IconButton.cjs');

const Popover = index.Root;
const PopoverTrigger = index.Trigger;
const PopoverContent = React.forwardRef(
  ({ align = "center", children, className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(index.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    index.Content,
    {
      ref,
      align,
      sideOffset,
      className: twMerge.twMerge(
        "bg-surface-surface-0 border border-outline-base-em min-w-32 p-4 rounded-16 z-50",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props,
      children
    }
  ) })
);
PopoverContent.displayName = index.Content.displayName;
const PopoverContentHeader = ({
  className,
  title
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  "div",
  {
    className: twMerge.twMerge(
      "flex justify-between items-center mx-4 pb-4",
      className
    ),
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-md text-text-high-em font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntime.jsx(index.Close, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
        IconButton.IconButton,
        {
          name: "cross",
          size: "xs",
          variant: "tertiary",
          className: "rounded-100"
        }
      ) })
    ]
  }
);

exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverContentHeader = PopoverContentHeader;
exports.PopoverTrigger = PopoverTrigger;
//# sourceMappingURL=Popover.cjs.map
