import { jsx } from 'react/jsx-runtime';

const SvgPlayFill = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M21.5 11.134v1.732l-15 8.66L5 20.66V3.34l1.5-.866z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgPlayFill as default };
//# sourceMappingURL=PlayFill.mjs.map
