'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgDay = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("path", { fill: "currentColor", d: "M13 1v3h-2V1z" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M13 23v-3h-2v3zm7.485-18.071L18.364 7.05 16.95 5.636l2.121-2.121zM4.929 20.485l2.121-2.121-1.414-1.414-2.121 2.121zm15.556-1.414-2.121-2.121-1.414 1.414 2.121 2.121zM4.929 3.515 7.05 5.636 5.636 7.05 3.515 4.93zM23 13h-3v-2h3zM1 13h3v-2H1z"
        }
      )
    ]
  }
);

module.exports = SvgDay;
//# sourceMappingURL=Day.cjs.map
