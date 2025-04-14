'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgCode = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "16 18 22 12 16 6" }),
      /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "8 6 2 12 8 18" })
    ]
  }
);

module.exports = SvgCode;
//# sourceMappingURL=Code.cjs.map
