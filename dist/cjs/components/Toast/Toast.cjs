'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var sonner = require('sonner');
var index = require('../../node_modules/class-variance-authority/dist/index.cjs');
var Button = require('../Button/Button.cjs');
require('../../utils/tw-merge.cjs');
require('../ChipButton/ChipButton.cjs');
require('../Dialog/Dialog.cjs');
var Icon = require('../Icon/Icon.cjs');
var IconButton = require('../IconButton/IconButton.cjs');
require('../Input/Input.cjs');
require('../Popover/Popover.cjs');
require('../Tabs/Tabs.cjs');
require('../ToggleGroup/ToggleGroup.cjs');
require('../Tooltip/Tooltip.cjs');

const toastStyles = index.cva(
  [
    "flex items-center",
    "w-fit px-4 py-3.5 space-x-4",
    "bg-surface-surface-white-smoke-1 border shadow-6 rounded-20",
    "text-text-low-em"
  ],
  {
    variants: {
      colorScheme: {
        default: ["border-outline-base-em"],
        error: ["border-outline-danger-alpha"],
        success: ["border-outline-success-alpha"],
        warning: ["border-outline-warning-alpha"],
        info: ["border-outline-info-alpha"]
      }
    },
    defaultVariants: {
      colorScheme: "default"
    }
  }
);
const toast = ({
  actionOnClick,
  actionText,
  colorScheme,
  children,
  className
}) => {
  sonner.toast.custom((t) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: toastStyles({ colorScheme, className }), children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-4 shrink-0", children: [
    children,
    actionText && /* @__PURE__ */ jsxRuntime.jsx(
      Button.Button,
      {
        colorScheme: "main",
        variant: "tertiary",
        size: "sm",
        onClick: actionOnClick,
        children: actionText
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      IconButton.IconButton,
      {
        variant: "ghost",
        name: "cross",
        size: "xs",
        onClick: () => sonner.toast.dismiss(t)
      }
    )
  ] }) }));
};
const errorToast = ({
  actionOnClick,
  actionText,
  children,
  className,
  iconName = "info-fill"
}) => toast({
  children: /* @__PURE__ */ jsxRuntime.jsx(IconWithChildren, { iconName, children }),
  actionOnClick,
  actionText,
  colorScheme: "error",
  className
});
const successToast = ({
  actionOnClick,
  actionText,
  children,
  className,
  iconName = "tick-fill"
}) => toast({
  children: /* @__PURE__ */ jsxRuntime.jsx(IconWithChildren, { iconName, children }),
  actionOnClick,
  actionText,
  colorScheme: "success",
  className
});
const warningToast = ({
  actionOnClick,
  actionText,
  children,
  className,
  iconName = "warning-fill"
}) => toast({
  children: /* @__PURE__ */ jsxRuntime.jsx(IconWithChildren, { iconName, children }),
  actionOnClick,
  actionText,
  colorScheme: "warning",
  className
});
const infoToast = ({
  actionOnClick,
  actionText,
  children,
  className,
  iconName = "info-fill"
}) => toast({
  children: /* @__PURE__ */ jsxRuntime.jsx(IconWithChildren, { iconName, children }),
  actionOnClick,
  actionText,
  colorScheme: "info",
  className
});
const IconWithChildren = ({ children, iconName }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(Icon.Icon, { name: iconName, className: "text-text-med-em shrink-0", size: 18 }),
  /* @__PURE__ */ jsxRuntime.jsx("div", { className: " max-w-44", children })
] });

Object.defineProperty(exports, 'Toaster', {
  enumerable: true,
  get: function () { return sonner.Toaster; }
});
exports.errorToast = errorToast;
exports.infoToast = infoToast;
exports.successToast = successToast;
exports.toast = toast;
exports.toastStyles = toastStyles;
exports.warningToast = warningToast;
//# sourceMappingURL=Toast.cjs.map
