'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgConfiguration = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M5 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 3.874 5H21V6H10.874A4 4 0 0 0 7 3M4 16h9.126A4.002 4.002 0 0 1 21 17a4 4 0 0 1-7.874 1H4zm13 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4",
        clipRule: "evenodd"
      }
    )
  }
);

module.exports = SvgConfiguration;
//# sourceMappingURL=Configuration.cjs.map
