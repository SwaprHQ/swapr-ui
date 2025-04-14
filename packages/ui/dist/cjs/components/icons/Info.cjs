'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgInfo = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 17v-6h2v6zm0-8V7h2v2z",
          clipRule: "evenodd"
        }
      )
    ]
  }
);

module.exports = SvgInfo;
//# sourceMappingURL=Info.cjs.map
