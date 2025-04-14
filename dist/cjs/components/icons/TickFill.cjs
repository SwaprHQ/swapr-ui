'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgTickFill = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
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
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8.817 10.853l-1.414 1.414 3.535 3.536 5.657-5.657-1.414-1.414-4.243 4.242z",
        clipRule: "evenodd"
      }
    )
  }
);

module.exports = SvgTickFill;
//# sourceMappingURL=TickFill.cjs.map
