import * as _headlessui_react from '@headlessui/react';
import { TabProps } from '@headlessui/react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';

declare const TabGroup: ({ children, ...props }: PropsWithChildren<TabProps<React.ElementType>>) => react_jsx_runtime.JSX.Element | null;
declare const TabHeader: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => react_jsx_runtime.JSX.Element;
declare const TabBody: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => react_jsx_runtime.JSX.Element;
interface TabStyledProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
}
declare const TabStyled: ({ children, className, ...props }: TabStyledProps) => react_jsx_runtime.JSX.Element;
declare const TabPanel: _headlessui_react._internal_ComponentTabPanel;

export { TabBody, TabGroup, TabHeader, TabPanel, TabStyled };
//# sourceMappingURL=Tabs.d.ts.map
