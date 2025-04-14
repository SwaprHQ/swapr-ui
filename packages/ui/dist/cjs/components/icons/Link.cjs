'use strict';

var jsxRuntime = require('react/jsx-runtime');

const SvgLink = ({ ...props }) => /* @__PURE__ */ jsxRuntime.jsxs(
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
          d: "M9.864 14.109a4 4 0 0 1 0-5.657l3.535-3.536a4 4 0 1 1 5.657 5.657l-1.787 1.788a6 6 0 0 0-.575-2.254l.948-.948a2 2 0 1 0-2.828-2.828l-3.536 3.535a2 2 0 0 0 0 2.829z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M12.692 14.109a2 2 0 0 0 0-2.829l1.415-1.414a4 4 0 0 1 0 5.657l-3.536 3.535a4 4 0 0 1-5.657-5.656l1.788-1.788c.042.773.234 1.54.575 2.253l-.949.949a2 2 0 0 0 2.829 2.828z"
        }
      )
    ]
  }
);

module.exports = SvgLink;
//# sourceMappingURL=Link.cjs.map
