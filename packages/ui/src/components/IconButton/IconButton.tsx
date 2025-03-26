import { forwardRef, Ref } from "react";

import { cva } from "class-variance-authority";
import { Button, ButtonProps } from "../Button";
import { Icon, IconProps } from "../Icon";

export const iconButtonStyles = cva(["p-0"], {
  variants: {
    size: {
      xs: "size-8 rounded-6",
      sm: "size-10 rounded-8",
      md: "size-12 rounded-12",
      lg: "size-14 rounded-16",
      xl: "size-16 rounded-16",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Size = NonNullable<ButtonProps["size"]>;
export const iconSize: Record<Size, number> = {
  xs: 20,
  sm: 24,
  md: 28,
  lg: 32,
  xl: 40,
};

export const IconButton = forwardRef(
  (
    {
      className,
      size = "md",
      name,
      ...props
    }: ButtonProps & Pick<IconProps, "name">,
    ref: Ref<HTMLButtonElement>
  ) => (
    <Button
      className={iconButtonStyles({ className, size })}
      {...props}
      ref={ref}
    >
      <Icon size={iconSize[size]} name={name} className="flex-shrink-0" />
    </Button>
  )
);
