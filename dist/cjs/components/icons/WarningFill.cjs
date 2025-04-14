'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgWarningFill = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M14.458 2H9.636L.5 17.823 2.911 22h18.272l2.411-4.177zm-1.41 6v6h-2V8zm0 8v2h-2v-2z",
        clipRule: "evenodd"
      }
    )
  }
);

module.exports = SvgWarningFill;
//# sourceMappingURL=WarningFill.cjs.map
