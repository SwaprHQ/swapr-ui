import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { toast as toast$1 } from 'sonner';
export { Toaster } from 'sonner';
import { cva } from '../../node_modules/class-variance-authority/dist/index.mjs';
import { Button } from '../Button/Button.mjs';
import '../../utils/tw-merge.mjs';
import '../ChipButton/ChipButton.mjs';
import '../Dialog/Dialog.mjs';
import { Icon } from '../Icon/Icon.mjs';
import { IconButton } from '../IconButton/IconButton.mjs';
import '../Input/Input.mjs';
import '../Popover/Popover.mjs';
import '../Tabs/Tabs.mjs';
import '../ToggleGroup/ToggleGroup.mjs';
import '../Tooltip/Tooltip.mjs';

const toastStyles = cva(
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
  toast$1.custom((t) => /* @__PURE__ */ jsx("div", { className: toastStyles({ colorScheme, className }), children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 shrink-0", children: [
    children,
    actionText && /* @__PURE__ */ jsx(
      Button,
      {
        colorScheme: "main",
        variant: "tertiary",
        size: "sm",
        onClick: actionOnClick,
        children: actionText
      }
    ),
    /* @__PURE__ */ jsx(
      IconButton,
      {
        variant: "ghost",
        name: "cross",
        size: "xs",
        onClick: () => toast$1.dismiss(t)
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
  children: /* @__PURE__ */ jsx(IconWithChildren, { iconName, children }),
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
  children: /* @__PURE__ */ jsx(IconWithChildren, { iconName, children }),
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
  children: /* @__PURE__ */ jsx(IconWithChildren, { iconName, children }),
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
  children: /* @__PURE__ */ jsx(IconWithChildren, { iconName, children }),
  actionOnClick,
  actionText,
  colorScheme: "info",
  className
});
const IconWithChildren = ({ children, iconName }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Icon, { name: iconName, className: "text-text-med-em shrink-0", size: 18 }),
  /* @__PURE__ */ jsx("div", { className: " max-w-44", children })
] });

export { errorToast, infoToast, successToast, toast, toastStyles, warningToast };
//# sourceMappingURL=Toast.mjs.map
