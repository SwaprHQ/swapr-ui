'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgSwapHorizontal = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "m6 11-.707-1.707 4-4 1.414 1.414L8.414 9H18v2zm12 2 .707 1.707-4 4-1.414-1.414L15.586 15H6v-2z"
      }
    )
  }
);

module.exports = SvgSwapHorizontal;
//# sourceMappingURL=SwapHorizontal.cjs.map
