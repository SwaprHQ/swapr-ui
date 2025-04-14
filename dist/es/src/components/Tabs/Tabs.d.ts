import { PropsWithChildren } from "react";
import { TabProps } from "@headlessui/react";
export declare const TabGroup: ({ children, ...props }: PropsWithChildren<TabProps<React.ElementType>>) => import("react/jsx-runtime").JSX.Element | null;
export declare const TabHeader: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
export declare const TabBody: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
interface TabStyledProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
}
export declare const TabStyled: ({ children, className, ...props }: TabStyledProps) => import("react/jsx-runtime").JSX.Element;
export declare const TabPanel: import("@headlessui/react")._internal_ComponentTabPanel;
export {};
//# sourceMappingURL=Tabs.d.ts.map