import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { PropsWithChildren } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ButtonProps } from '@/components/Button';
import { IconName } from '@/components/Icon';

interface AppendProp {
    append?: "center" | "bottom" | null | undefined;
}
interface SizeProp {
    size?: ButtonProps["size"];
}
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const Dialog: react.FC<DialogPrimitive.DialogProps>;
declare const DialogDescription: react.ForwardRefExoticComponent<DialogPrimitive.DialogDescriptionProps & react.RefAttributes<HTMLParagraphElement>>;
declare const DialogPortal: react.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogTrigger: react.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DialogContent: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & AppendProp & react.RefAttributes<HTMLDivElement>>;
declare const DialogClose: react.ForwardRefExoticComponent<{
    name?: IconName;
    className?: string;
} & react.RefAttributes<HTMLButtonElement>>;
declare const DialogHeader: {
    ({ className, children, ...props }: DialogProps & SizeProp & PropsWithChildren): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogBody: {
    ({ className, ...props }: DialogProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: DialogProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
//# sourceMappingURL=Dialog.d.ts.map

export { Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger };
//# sourceMappingURL=Dialog.d.ts.map
