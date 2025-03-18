import { forwardRef, useEffect, useRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, cx } from "class-variance-authority";
import { Icon, IconName } from "../Icon";

const inputStyles = cva(
  [
    "flex w-full items-center text-text-high-em",
    "border-outline-med-em",
    "group-has-[:disabled]:cursor-not-allowed group-has-[:disabled]:text-text-disabled group-has-[:disabled]:bg-surface-surface-1 group-has-[:disabled]:shadow-none group-has-[:disabled]:border-transparent",
    "group-has-[:invalid]:shadow-focus-danger",
  ],
  {
    variants: {
      size: {
        sm: "text-sm space-x-1 px-2 rounded-8 h-8",
        md: "text-[13px] space-x-2 px-3 rounded-[10px] h-9",
        lg: "text-[15px] space-x-3 px-4 rounded-12 h-12",
        xl: "text-[18px] space-x-3 px-4 rounded-16 h-14",
      },
      variant: {
        secondary:
          "bg-surface-surface-smoke-gray text-text-med-em placeholder:text-text-disabled focus-within:shadow-focus-gray",
        tertiary:
          "bg-surface-primary-base-em-alpha text-text-primary-em placeholder:text-text-primary-med focus-within:shadow-focus-primary",
        primary:
          "bg-surface-primary-accent-1 text-text-primary-em placeholder:text-text-primary-med focus-within:shadow-focus-primary border border-surface-primary-med-em",
        ghost: "bg-surface-surface-0 text-text-high-em focus-within:shadow-2",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "secondary",
    },
  }
);

const inputFieldStyles = cva(
  ["bg-[inherit] group-has-[:disabled]:placeholder:text-text-base-em"],
  {
    variants: {
      variant: {
        secondary: "placeholder:text-text-low-em",
        primary: "placeholder:text-text-primary-med-em",
        tertiary: "placeholder:text-text-primary-med-em",
        ghost: "placeholder:text-text-low-em",
      },
    },
    defaultVariants: { variant: "secondary" },
  }
);

export type InputSizeProp = "sm" | "md" | "lg" | "xl";
export type InputVariantProp = "secondary" | "primary" | "tertiary" | "ghost";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string | undefined | null;
  message?: string | undefined | null;
  leftIcon?: IconName | undefined | null;
  rightIcon?: IconName | undefined | null;
  size?: InputSizeProp | undefined;
  variant?: InputVariantProp | undefined;
  isInvalid?: boolean | undefined | null;
}

const iconSize: Record<InputSizeProp, number> = {
  sm: 14,
  md: 18,
  lg: 20,
  xl: 24,
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    id,
    label,
    message,
    leftIcon,
    rightIcon,
    size = "md",
    variant,
    isInvalid,
    ...props
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (isInvalid && message) inputRef.current?.setCustomValidity(message);
      else inputRef.current?.setCustomValidity("");
    }, [isInvalid, message]);

    return (
      <div className={cx("group", className)}>
        {label && (
          <LabelPrimitive.Root
            className={cx([
              "text-sm text-text-low-em",
              "group-has-[:disabled]:text-text-base-em",
            ])}
            htmlFor={id}
          >
            {label}
          </LabelPrimitive.Root>
        )}
        <div
          className={inputStyles({ size, variant })}
          onClick={() => {
            if (inputRef.current) inputRef.current.focus();
          }}
          onDoubleClick={() => {
            if (inputRef.current) inputRef.current.select();
          }}
        >
          {leftIcon && (
            <Icon
              size={iconSize[size]}
              name={leftIcon}
              className="text-text-low-em"
            />
          )}
          <InputField
            className={inputFieldStyles({ variant })}
            ref={inputRef}
            id={id}
            {...props}
          />
          {rightIcon && (
            <Icon
              size={iconSize[size]}
              name={rightIcon}
              className="text-text-low-em"
            />
          )}
        </div>
        {message && (
          <div
            className={cx([
              "flex space-x-1 mt-2",
              "group-has-[:disabled]:text-text-base-em",
              "group-has-[:invalid]:text-text-danger-high-em",
            ])}
          >
            <Icon size={14} name="info-fill" />
            <p className="text-sm text-text-med-em group-has-[:disabled]:text-text-base-em">
              {message}
            </p>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

const InputField = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={cx(
        "focus:outline-none bg-transparent w-full disabled:cursor-not-allowed disabled:text-text-low-em",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

InputField.displayName = "InputField";

export { Input, InputField };
