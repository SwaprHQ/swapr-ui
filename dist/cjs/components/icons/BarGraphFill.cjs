'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgBarGraphFill = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M3 8h5v14H3zm7-6h5v20h-5zm7 9h5v11h-5z",
        clipRule: "evenodd"
      }
    )
  }
);

module.exports = SvgBarGraphFill;
//# sourceMappingURL=BarGraphFill.cjs.map
