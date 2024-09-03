import { forwardRef } from "react";
import {
  Close,
  Content,
  PopoverContentProps,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-popover";
import { twMerge } from "@/utils";
import { IconButton } from "../IconButton";

const Popover = Root;

const PopoverTrigger = Trigger;

const PopoverContent = forwardRef<
  React.ElementRef<typeof Content>,
  PopoverContentProps
>(
  (
    { align = "center", children, className, sideOffset = 4, ...props },
    ref
  ) => (
    <Portal>
      <Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={twMerge(
          "bg-surface-surface-0 border border-outline-base-em min-w-32 p-4 rounded-16 z-50",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      >
        {children}
      </Content>
    </Portal>
  )
);
PopoverContent.displayName = Content.displayName;

interface PopoverContentHeaderProps {
  className?: string;
  title?: string;
}
const PopoverContentHeader = ({
  className,
  title,
}: PopoverContentHeaderProps) => (
  <div
    className={twMerge(
      "flex justify-between items-center mx-4 pb-4",
      className
    )}
  >
    <p className="text-lg text-text-high-em font-bold">{title}</p>
    <Close asChild>
      <IconButton name="cross" size="md" variant="ghost" />
    </Close>
  </div>
);

export { Popover, PopoverContent, PopoverContentHeader, PopoverTrigger };
