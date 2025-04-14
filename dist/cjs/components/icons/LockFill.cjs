'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgLockFill = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M7 9V7a5 5 0 0 1 10 0v2h3v13H4V9zm2-2a3 3 0 1 1 6 0v2H9zm4.5 9v-3h-3v3h.5v2h2v-2z",
        clipRule: "evenodd"
      }
    )
  }
);

module.exports = SvgLockFill;
//# sourceMappingURL=LockFill.cjs.map
