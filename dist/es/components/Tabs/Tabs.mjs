import { jsxs, jsx } from 'react/jsx-runtime';
import { Children, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { ChipButton } from '../ChipButton/ChipButton.mjs';
import { twMerge } from '../../utils/tw-merge.mjs';

const TabGroup = ({
  children,
  ...props
}) => {
  if (!children) return null;
  const headerChildren = Children.toArray(children).filter(
    (child) => child?.type === TabHeader
  );
  const bodyChildren = Children.toArray(children).filter(
    (child) => child?.type === TabBody
  );
  return /* @__PURE__ */ jsxs(Tab.Group, { ...props, children: [
    headerChildren,
    bodyChildren
  ] });
};
const TabHeader = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Tab.List, { className: twMerge("flex space-x-2 p-0.5", className), ...props, children });
};
const TabBody = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Tab.Panels, { ...props, children });
};
const TabStyled = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Tab, { as: Fragment, ...props, children: ({ selected }) => (
    /* Use the `selected` state to conditionally style the selected tab. */
    /* @__PURE__ */ jsx(
      ChipButton,
      {
        active: selected,
        colorScheme: "neutral",
        className,
        children
      }
    )
  ) });
};
const TabPanel = Tab.Panel;

export { TabBody, TabGroup, TabHeader, TabPanel, TabStyled };
//# sourceMappingURL=Tabs.mjs.map
