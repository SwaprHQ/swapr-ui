import { PropsWithChildren } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ButtonProps } from "@/components/Button";
import { IconName } from "@/components/Icon";
interface AppendProp {
    append?: "center" | "bottom" | null | undefined;
}
interface SizeProp {
    size?: ButtonProps["size"];
}
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const Dialog: import("react").FC<DialogPrimitive.DialogProps>;
declare const DialogDescription: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
declare const DialogPortal: import("react").FC<DialogPrimitive.DialogPortalProps>;
declare const DialogTrigger: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: import("react").ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
declare const DialogContent: import("react").ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & AppendProp & import("react").RefAttributes<HTMLDivElement>>;
declare const DialogClose: import("react").ForwardRefExoticComponent<{
    name?: IconName;
    className?: string;
} & import("react").RefAttributes<HTMLButtonElement>>;
declare const DialogHeader: {
    ({ className, children, ...props }: DialogProps & SizeProp & PropsWithChildren): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogBody: {
    ({ className, ...props }: DialogProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: DialogProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogTitle: import("react").ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & import("react").RefAttributes<HTMLHeadingElement>, "ref"> & import("react").RefAttributes<HTMLHeadingElement>>;
export { Dialog, DialogDescription, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogBody, DialogFooter, DialogTitle, VisuallyHidden, };
//# sourceMappingURL=Dialog.d.ts.map