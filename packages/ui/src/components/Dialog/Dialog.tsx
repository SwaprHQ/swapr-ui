import { ElementRef, forwardRef, PropsWithChildren } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cva } from "class-variance-authority";
import { twMerge } from "@/utils";
import { ButtonProps } from "@/components/Button";
import { IconButton } from "@/components/IconButton";
import { IconName } from "@/components/Icon";

interface AppendProp {
  append?: "center" | "bottom" | null | undefined;
}

interface SizeProp {
  size?: ButtonProps["size"];
}

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {}

const Dialog = DialogPrimitive.Root;
const DialogDescription = DialogPrimitive.Description;
const DialogPortal = DialogPrimitive.Portal;
const DialogTrigger = DialogPrimitive.Trigger;

const DialogOverlay = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={twMerge(
      "fixed inset-0 z-50 bg-black-12 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const modalPositionStyles = cva(
  [
    "fixed left-[50%] z-50 max-h-[70%] flex w-full max-w-lg translate-x-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
  ],
  {
    variants: {
      append: {
        center: "top-[50%] translate-y-[-50%]",
        bottom:
          "top-[15%] md:top-[50%] h-[85vh] max-h-[100%] md:max-h-[70%] md:h-auto md:translate-y-[-50%] ",
      },
    },
    defaultVariants: { append: "center" },
  }
);

const modalContentStyles = cva(
  [
    "flex flex-col w-full bg-surface-surface-0 border border-outline-base-em rounded-16 shadow-6 overflow-hidden",
  ],
  {
    variants: {
      append: {
        center: "mx-2 md:mx-0",
        bottom: "mx-0 rounded-b-0 md:rounded-b-16",
      },
    },
    defaultVariants: { append: "center" },
  }
);

const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & AppendProp
>(({ className, append, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={modalPositionStyles({ append })}
      {...props}
    >
      <div className={modalContentStyles({ append, className })}>
        {children}
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogClose = forwardRef<
  ElementRef<typeof DialogPrimitive.Close>,
  { name?: IconName; className?: string }
>(({ name = "cross", className, ...props }, ref) => (
  <DialogPrimitive.Close asChild>
    <IconButton
      name={name}
      size="xs"
      variant="tertiary"
      ref={ref}
      className={twMerge("rounded-100", className)}
      {...props}
    />
  </DialogPrimitive.Close>
));

DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogHeader = ({
  className,
  children,
  ...props
}: DialogProps & SizeProp & PropsWithChildren) => (
  <div
    className={twMerge(
      "flex items-center p-3 md:p-4",
      children ? "justify-between" : "justify-end",
      className
    )}
    {...props}
  >
    {children}
    <DialogClose />
  </div>
);
DialogHeader.displayName = "DialogHeader";

const DialogBody = ({ className, ...props }: DialogProps) => (
  <div className={twMerge("overflow-auto p-3 md:p-4", className)} {...props} />
);
DialogBody.displayName = "DialogBody";

const DialogFooter = ({ className, ...props }: DialogProps) => (
  <div
    className={twMerge(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end p-3 md:p-4",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={twMerge("text-md md:text-lg font-semibold", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export {
  Dialog,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  VisuallyHidden,
};
