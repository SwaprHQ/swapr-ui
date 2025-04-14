'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgInfoFill = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
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
        fillRule: "evenodd",
        d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M11 9V7h2v2zm0 8v-6h2v6z",
        clipRule: "evenodd"
      }
    )
  }
);

module.exports = SvgInfoFill;
//# sourceMappingURL=InfoFill.cjs.map
