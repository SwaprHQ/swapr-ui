'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var twMerge = require('../../utils/tw-merge.cjs');
var styles = require('./styles.cjs');

const Button = React.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        className: twMerge.twMerge(
          styles.buttonStyles({
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

exports.Button = Button;
//# sourceMappingURL=Button.cjs.map
