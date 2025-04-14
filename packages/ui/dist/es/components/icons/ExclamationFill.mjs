import { jsx } from 'react/jsx-runtime';

const SvgExclamationFill = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-1-5v-2h2v2zm0-10v6h2V7z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgExclamationFill as default };
//# sourceMappingURL=ExclamationFill.mjs.map
