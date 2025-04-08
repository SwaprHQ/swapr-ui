import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        "p-8 border shadow-1 border-surface-surface-2 rounded-16",
        className
      )}
    >
      {children}
    </div>
  );
};
