'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgTokenFill = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M7.007 9.339a6 6 0 1 0 7.654 7.654 7.96 7.96 0 0 1-4.23-1.425L9 17l-2-2 1.432-1.432a7.96 7.96 0 0 1-1.425-4.23z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12m2-6-2-2-2 2 2 2z",
          clipRule: "evenodd"
        }
      )
    ]
  }
);

module.exports = SvgTokenFill;
//# sourceMappingURL=TokenFill.cjs.map
