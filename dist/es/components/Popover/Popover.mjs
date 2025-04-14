import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Portal, Content as Content2, Root as Root2, Trigger, Close } from '../../node_modules/@radix-ui/react-popover/dist/index.mjs';
import { twMerge } from '../../utils/tw-merge.mjs';
import { IconButton } from '../IconButton/IconButton.mjs';

const Popover = Root2;
const PopoverTrigger = Trigger;
const PopoverContent = forwardRef(
  ({ align = "center", children, className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(
    Content2,
    {
      ref,
      align,
      sideOffset,
      className: twMerge(
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
PopoverContent.displayName = Content2.displayName;
const PopoverContentHeader = ({
  className,
  title
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: twMerge(
      "flex justify-between items-center mx-4 pb-4",
      className
    ),
    children: [
      /* @__PURE__ */ jsx("p", { className: "text-md text-text-high-em font-semibold", children: title }),
      /* @__PURE__ */ jsx(Close, { asChild: true, children: /* @__PURE__ */ jsx(
        IconButton,
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

export { Popover, PopoverContent, PopoverContentHeader, PopoverTrigger };
//# sourceMappingURL=Popover.mjs.map
