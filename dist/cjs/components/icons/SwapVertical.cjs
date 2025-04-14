'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgSwapVertical = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: "currentColor",
        d: "m13 6 1.707-.707 4 4-1.414 1.414L15 8.414V18h-2zm-2 12-1.707.707-4-4 1.414-1.414L9 15.586V6h2z"
      }
    )
  }
);

module.exports = SvgSwapVertical;
//# sourceMappingURL=SwapVertical.cjs.map
