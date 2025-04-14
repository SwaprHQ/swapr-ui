import { jsx } from 'react/jsx-runtime';

const SvgMinusFill = ({ ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5-11H7v2h10z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgMinusFill as default };
//# sourceMappingURL=MinusFill.mjs.map
