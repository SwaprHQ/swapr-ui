import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { PropsWithChildren, ReactNode } from 'react';
import { IconName } from '@/components';

declare const toastStyles: (props?: ({
    colorScheme?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ToastProps extends PropsWithChildren {
    actionText?: ReactNode | string | undefined;
    actionOnClick?: () => void;
    colorScheme?: "default" | "error" | "success" | "warning" | "info";
    className?: string;
    iconName?: IconName;
}
declare const toast: ({ actionOnClick, actionText, colorScheme, children, className, }: ToastProps) => void;
declare const errorToast: ({ actionOnClick, actionText, children, className, iconName, }: ToastProps) => void;
declare const successToast: ({ actionOnClick, actionText, children, className, iconName, }: ToastProps) => void;
declare const warningToast: ({ actionOnClick, actionText, children, className, iconName, }: ToastProps) => void;
declare const infoToast: ({ actionOnClick, actionText, children, className, iconName, }: ToastProps) => void;

export { errorToast, infoToast, successToast, toast, toastStyles, warningToast };
//# sourceMappingURL=Toast.d.ts.map
