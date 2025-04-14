'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgEyeView = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M7.05 6.536 1.586 12l5.464 5.465a7 7 0 0 0 9.9 0L22.414 12 16.95 6.536a7 7 0 0 0-9.9 0m1.414 9.514L4.414 12l4.05-4.05a5 5 0 0 1 7.072 0l4.05 4.05-4.05 4.05a5 5 0 0 1-7.072 0M15 11h-2V9h-1a3 3 0 1 0 3 3z",
        clipRule: "evenodd"
      }
    )
  }
);

module.exports = SvgEyeView;
//# sourceMappingURL=EyeView.cjs.map
