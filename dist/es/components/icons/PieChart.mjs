import { jsxs, jsx } from 'react/jsx-runtime';

const SvgPieChart = ({ ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M22 10a9 9 0 0 0-9-9h-1v10h10zm-2.533-2.679A7 7 0 0 1 19.928 9H14V3.072a7 7 0 0 1 5.467 4.25z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M6 4.517a9 9 0 0 1 4-1.461v2.016A7 7 0 1 0 17.928 13h2.016A9 9 0 1 1 6 4.517"
        }
      )
    ]
  }
);

export { SvgPieChart as default };
//# sourceMappingURL=PieChart.mjs.map
