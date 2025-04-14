import { jsxs, jsx } from 'react/jsx-runtime';

const SvgCode = ({ ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
    children: [
      /* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }),
      /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })
    ]
  }
);

export { SvgCode as default };
//# sourceMappingURL=Code.mjs.map
