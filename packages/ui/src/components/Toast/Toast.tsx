import { PropsWithChildren, ReactNode } from "react";
import { toast as sonnerToast, Toaster } from "sonner";
import { cva } from "class-variance-authority";

import { IconButton, Button, Icon, IconName } from "@/components";

export const toastStyles = cva(
  [
    "flex items-center",
    "w-fit px-4 py-3.5 space-x-4",
    "bg-surface-surface-white-smoke-1 border shadow-6 rounded-20",
    "text-text-low-em",
  ],
  {
    variants: {
      colorScheme: {
        default: ["border-outline-base-em"],
        error: ["border-outline-danger-alpha"],
        success: ["border-outline-success-alpha"],
        warning: ["border-outline-warning-alpha"],
        info: ["border-outline-info-alpha"],
      },
    },
    defaultVariants: {
      colorScheme: "default",
    },
  }
);

interface ToastProps extends PropsWithChildren {
  actionText?: ReactNode | string | undefined;
  actionOnClick?: () => void;
  colorScheme?: "default" | "error" | "success" | "warning" | "info";
  className?: string;
  iconName?: IconName;
}

export const toast = ({
  actionOnClick,
  actionText,
  colorScheme,
  children,
  className,
}: ToastProps) => {
  sonnerToast.custom(t => (
    <div className={toastStyles({ colorScheme, className })}>
      <div className="flex items-center space-x-4 shrink-0">
        {children}
        {actionText && (
          <Button
            colorScheme="main"
            variant="tertiary"
            size="sm"
            onClick={actionOnClick}
          >
            {actionText}
          </Button>
        )}
        <IconButton
          variant="ghost"
          name="cross"
          size="xs"
          onClick={() => sonnerToast.dismiss(t)}
        />
      </div>
    </div>
  ));
};

export const errorToast = ({
  actionOnClick,
  actionText,
  children,
  className,
  iconName = "info-fill",
}: ToastProps) =>
  toast({
    children: (
      <IconWithChildren iconName={iconName}>{children}</IconWithChildren>
    ),
    actionOnClick,
    actionText,
    colorScheme: "error",
    className,
  });

export const successToast = ({
  actionOnClick,
  actionText,
  children,
  className,
  iconName = "tick-fill",
}: ToastProps) =>
  toast({
    children: (
      <IconWithChildren iconName={iconName}>{children}</IconWithChildren>
    ),
    actionOnClick,
    actionText,
    colorScheme: "success",
    className,
  });

export const warningToast = ({
  actionOnClick,
  actionText,
  children,
  className,
  iconName = "warning-fill",
}: ToastProps) =>
  toast({
    children: (
      <IconWithChildren iconName={iconName}>{children}</IconWithChildren>
    ),
    actionOnClick,
    actionText,
    colorScheme: "warning",
    className,
  });

export const infoToast = ({
  actionOnClick,
  actionText,
  children,
  className,
  iconName = "info-fill",
}: ToastProps) =>
  toast({
    children: (
      <IconWithChildren iconName={iconName}>{children}</IconWithChildren>
    ),
    actionOnClick,
    actionText,
    colorScheme: "info",
    className,
  });

export { Toaster };

interface IconWithChildrenProps extends PropsWithChildren {
  iconName: IconName;
}

const IconWithChildren = ({ children, iconName }: IconWithChildrenProps) => (
  <>
    <Icon name={iconName} className="text-text-med-em shrink-0" size={18} />
    <div className=" max-w-44">{children}</div>
  </>
);
