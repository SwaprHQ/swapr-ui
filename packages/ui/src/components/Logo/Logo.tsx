import { cva } from "class-variance-authority";
import { twMerge } from "@/utils";

export const logoStyles = cva(
  ["flex items-center justify-center", "rounded-100 bg-surface-white"],
  {
    variants: {
      size: {
        xl: ["size-12"],
        lg: ["size-10"],
        md: ["size-8"],
        sm: ["size-6"],
        xs: ["size-5"],
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export type LogoSizeProp = "xs" | "sm" | "md" | "lg" | "xl";

interface LogoProps {
  className?: string;
  size?: LogoSizeProp;
  src: string;
  alt: string;
}

export const Logo = ({ src, className, size, alt }: LogoProps) => {
  return (
    <img
      src={src}
      className={twMerge(logoStyles({ size, className }))}
      alt={alt}
      width={54}
      height={54}
    />
  );
};
