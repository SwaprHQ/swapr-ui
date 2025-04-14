'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgUser = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m1 9a3 3 0 0 0-3 3v3H3v-3a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3h-2v-3a3 3 0 0 0-3-3z",
        clipRule: "evenodd"
      }
    )
  }
);

module.exports = SvgUser;
//# sourceMappingURL=User.cjs.map
