import { PropsWithChildren, ReactNode } from "react";
import { Toaster } from "sonner";
import { IconName } from "@/components";
export declare const toastStyles: (props?: ({
    colorScheme?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface ToastProps extends PropsWithChildren {
    actionText?: ReactNode | string | undefined;
    actionOnClick?: () => void;
    colorScheme?: "default" | "error" | "success" | "warning" | "info";
    className?: string;
    iconName?: IconName;
}
export declare const toast: ({ actionOnClick, actionText, colorScheme, children, className, }: ToastProps) => void;
export declare const errorToast: ({ actionOnClick, actionText, children, className, iconName, }: ToastProps) => void;
export declare const successToast: ({ actionOnClick, actionText, children, className, iconName, }: ToastProps) => void;
export declare const warningToast: ({ actionOnClick, actionText, children, className, iconName, }: ToastProps) => void;
export declare const infoToast: ({ actionOnClick, actionText, children, className, iconName, }: ToastProps) => void;
export { Toaster };
//# sourceMappingURL=Toast.d.ts.map