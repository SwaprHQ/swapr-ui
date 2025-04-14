'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var react = require('@headlessui/react');
var ChipButton = require('../ChipButton/ChipButton.cjs');
var twMerge = require('../../utils/tw-merge.cjs');

const TabGroup = ({
  children,
  ...props
}) => {
  if (!children) return null;
  const headerChildren = React.Children.toArray(children).filter(
    (child) => child?.type === TabHeader
  );
  const bodyChildren = React.Children.toArray(children).filter(
    (child) => child?.type === TabBody
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(react.Tab.Group, { ...props, children: [
    headerChildren,
    bodyChildren
  ] });
};
const TabHeader = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(react.Tab.List, { className: twMerge.twMerge("flex space-x-2 p-0.5", className), ...props, children });
};
const TabBody = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(react.Tab.Panels, { ...props, children });
};
const TabStyled = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(react.Tab, { as: React.Fragment, ...props, children: ({ selected }) => (
    /* Use the `selected` state to conditionally style the selected tab. */
    /* @__PURE__ */ jsxRuntime.jsx(
      ChipButton.ChipButton,
      {
        active: selected,
        colorScheme: "neutral",
        className,
        children
      }
    )
  ) });
};
const TabPanel = react.Tab.Panel;

exports.TabBody = TabBody;
exports.TabGroup = TabGroup;
exports.TabHeader = TabHeader;
exports.TabPanel = TabPanel;
exports.TabStyled = TabStyled;
//# sourceMappingURL=Tabs.cjs.map
