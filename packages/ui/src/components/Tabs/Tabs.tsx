import { Children, Fragment, PropsWithChildren } from "react";
import { Tab, TabProps } from "@headlessui/react";
import { ChipButton } from "../ChipButton";
import { twMerge } from "@/utils";

export const TabGroup = ({
  children,
  ...props
}: PropsWithChildren<TabProps<React.ElementType>>) => {
  if (!children) return null;

  const headerChildren = Children.toArray(children).filter(
    child => (child as any)?.type === TabHeader
  );

  const bodyChildren = Children.toArray(children).filter(
    child => (child as any)?.type === TabBody
  );

  return (
    <Tab.Group {...props}>
      {headerChildren}
      {bodyChildren}
    </Tab.Group>
  );
};

export const TabHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Tab.List className={twMerge("flex space-x-3 p-0.5", className)} {...props}>
      {children}
    </Tab.List>
  );
};

export const TabBody = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <Tab.Panels {...props}>{children}</Tab.Panels>;
};

interface TabStyledProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

export const TabStyled = ({
  children,
  className,
  ...props
}: TabStyledProps) => {
  return (
    <Tab as={Fragment} {...props}>
      {({ selected }) => (
        /* Use the `selected` state to conditionally style the selected tab. */
        <ChipButton
          active={selected}
          colorScheme="neutral"
          className={className}
        >
          {children}
        </ChipButton>
      )}
    </Tab>
  );
};

export const TabPanel = Tab.Panel;
