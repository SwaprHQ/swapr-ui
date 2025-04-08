import { forwardRef, Ref } from "react";

import { cva } from "class-variance-authority";
import { Button, ButtonProps } from "../Button";
import { Icon, IconProps } from "../Icon";

export const iconButtonStyles = cva(["p-0"], {
  variants: {
    size: {
      xs: "size-7 rounded-8",
      sm: "size-8 rounded-8",
      md: "size-10 rounded-10",
      lg: "size-12 rounded-14",
      xl: "size-14 rounded-14",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Size = NonNullable<ButtonProps["size"]>;
export const iconSize: Record<Size, number> = {
  xs: 18,
  sm: 22,
  md: 26,
  lg: 30,
  xl: 36,
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
