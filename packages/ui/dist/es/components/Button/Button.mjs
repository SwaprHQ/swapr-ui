import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { twMerge } from '../../utils/tw-merge.mjs';
import { buttonStyles } from './styles.mjs';

const Button = forwardRef(
  ({
    active,
    children,
    className,
    colorScheme,
    size,
    variant,
    width,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: twMerge(
          buttonStyles({
            active,
            className,
            colorScheme,
            size,
            variant,
            width
          })
        ),
        ...props,
        ref,
        children
      }
    );
  }
);

export { Button };
//# sourceMappingURL=Button.mjs.map
