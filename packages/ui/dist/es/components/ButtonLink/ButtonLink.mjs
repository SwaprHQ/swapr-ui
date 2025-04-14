import { jsx } from 'react/jsx-runtime';
import { cva } from '../../node_modules/class-variance-authority/dist/index.mjs';
import { twMerge } from '../../utils/tw-merge.mjs';
import '../Button/Button.mjs';
import { buttonStyles } from '../Button/styles.mjs';

const buttonLinkStyles = cva(["cursor-pointer"], {
  variants: {
    colorScheme: {
      main: [],
      danger: [],
      success: []
    },
    variant: {
      primary: [],
      light: [],
      secondary: [],
      tertiary: [],
      ghost: [],
      neutral: []
    },
    active: {
      true: []
    },
    disabled: {
      true: [
        "bg-surface-disabled-base-em hover:bg-surface-disabled-base-em cursor-not-allowed text-text-base-em",
        "shadow-none focus-visible:shadow-none active:shadow-none focus-visible:ring-0 active:ring-0"
      ]
    }
  },
  compoundVariants: [
    {
      disabled: true,
      variant: "ghost",
      class: [
        "bg-inherit hover:bg-inherit",
        "shadow-none focus-visible:shadow-none active:shadow-none focus-visible:ring-0 active:ring-0"
      ]
    }
  ]
});
const DEFAULT_ELEMENT = "a";
function ButtonLink({
  active,
  as,
  className,
  colorScheme,
  disabled,
  size,
  variant,
  width,
  ...props
}) {
  const Component = as || DEFAULT_ELEMENT;
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: twMerge(
        buttonStyles({
          active,
          colorScheme,
          size,
          variant,
          width
        }),
        buttonLinkStyles({
          active,
          colorScheme,
          disabled,
          variant
        }),
        className
      ),
      tabIndex: 0,
      ...props
    }
  );
}

export { ButtonLink };
//# sourceMappingURL=ButtonLink.mjs.map
