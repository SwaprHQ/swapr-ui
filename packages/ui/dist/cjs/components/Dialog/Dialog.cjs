'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index$1 = require('../../node_modules/@radix-ui/react-dialog/dist/index.cjs');
var index$2 = require('../../node_modules/class-variance-authority/dist/index.cjs');
var twMerge = require('../../utils/tw-merge.cjs');
var IconButton = require('../IconButton/IconButton.cjs');

const Dialog = index$1.Root;
const DialogDescription = index$1.Description;
const DialogPortal = index$1.Portal;
const DialogTrigger = index$1.Trigger;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  index$1.Overlay,
  {
    ref,
    className: twMerge.twMerge(
      "fixed inset-0 z-50 bg-black-12 backdrop-blur-xs data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = index$1.Overlay.displayName;
const modalPositionStyles = index$2.cva(
  [
    "fixed left-[50%] z-50 max-h-[70%] flex w-full max-w-lg translate-x-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
  ],
  {
    variants: {
      append: {
        center: "top-[50%] translate-y-[-50%]",
        bottom: "top-[15%] md:top-[50%] h-[85vh] max-h-[100%] md:max-h-[70%] md:h-auto md:translate-y-[-50%] "
      }
    },
    defaultVariants: { append: "center" }
  }
);
const modalContentStyles = index$2.cva(
  [
    "flex flex-col w-full bg-surface-surface-0 border border-outline-base-em rounded-16 shadow-6 overflow-hidden"
  ],
  {
    variants: {
      append: {
        center: "mx-2 md:mx-0",
        bottom: "mx-0 rounded-b-0 md:rounded-b-16"
      }
    },
    defaultVariants: { append: "center" }
  }
);
const DialogContent = React.forwardRef(({ className, append, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsx(
    index$1.Content,
    {
      ref,
      className: modalPositionStyles({ append }),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: modalContentStyles({ append, className }), children })
    }
  )
] }));
DialogContent.displayName = index$1.Content.displayName;
const DialogClose = React.forwardRef(({ name = "cross", className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(index$1.Close, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
  IconButton.IconButton,
  {
    name,
    size: "xs",
    variant: "tertiary",
    ref,
    className: twMerge.twMerge("rounded-100", className),
    ...props
  }
) }));
DialogClose.displayName = index$1.Close.displayName;
const DialogHeader = ({
  className,
  children,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  "div",
  {
    className: twMerge.twMerge(
      "flex items-center p-3 md:p-4",
      children ? "justify-between" : "justify-end",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(DialogClose, {})
    ]
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogBody = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: twMerge.twMerge("overflow-auto p-3 md:p-4", className), ...props });
DialogBody.displayName = "DialogBody";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    className: twMerge.twMerge(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end p-3 md:p-4",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  index$1.Title,
  {
    ref,
    className: twMerge.twMerge("text-md md:text-lg font-semibold", className),
    ...props
  }
));
DialogTitle.displayName = index$1.Title.displayName;

exports.Dialog = Dialog;
exports.DialogBody = DialogBody;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
//# sourceMappingURL=Dialog.cjs.map
