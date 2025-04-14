import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Overlay, Content, Close, Title, Root, Description, Portal, Trigger } from '../../node_modules/@radix-ui/react-dialog/dist/index.mjs';
import { cva } from '../../node_modules/class-variance-authority/dist/index.mjs';
import { twMerge } from '../../utils/tw-merge.mjs';
import { IconButton } from '../IconButton/IconButton.mjs';

const Dialog = Root;
const DialogDescription = Description;
const DialogPortal = Portal;
const DialogTrigger = Trigger;
const DialogOverlay = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Overlay,
  {
    ref,
    className: twMerge(
      "fixed inset-0 z-50 bg-black-12 backdrop-blur-xs data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const modalPositionStyles = cva(
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
const modalContentStyles = cva(
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
const DialogContent = forwardRef(({ className, append, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsx(
    Content,
    {
      ref,
      className: modalPositionStyles({ append }),
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: modalContentStyles({ append, className }), children })
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogClose = forwardRef(({ name = "cross", className, ...props }, ref) => /* @__PURE__ */ jsx(Close, { asChild: true, children: /* @__PURE__ */ jsx(
  IconButton,
  {
    name,
    size: "xs",
    variant: "tertiary",
    ref,
    className: twMerge("rounded-100", className),
    ...props
  }
) }));
DialogClose.displayName = Close.displayName;
const DialogHeader = ({
  className,
  children,
  ...props
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: twMerge(
      "flex items-center p-3 md:p-4",
      children ? "justify-between" : "justify-end",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(DialogClose, {})
    ]
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogBody = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: twMerge("overflow-auto p-3 md:p-4", className), ...props });
DialogBody.displayName = "DialogBody";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: twMerge(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end p-3 md:p-4",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Title,
  {
    ref,
    className: twMerge("text-md md:text-lg font-semibold", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;

export { Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger };
//# sourceMappingURL=Dialog.mjs.map
