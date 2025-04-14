import { jsxs, jsx } from 'react/jsx-runtime';

const SvgSidenav = ({ ...props }) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M9 3v18" })
    ]
  }
);

export { SvgSidenav as default };
//# sourceMappingURL=Sidenav.mjs.map
