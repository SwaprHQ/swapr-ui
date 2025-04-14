import { jsx } from 'react/jsx-runtime';

const SvgNightFill = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M3 11.976a9 9 0 0 1 6.102-8.523l1.269 1.269a7 7 0 0 0 8.884 8.884l1.268 1.268A9 9 0 0 1 3 11.976",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgNightFill as default };
//# sourceMappingURL=NightFill.mjs.map
