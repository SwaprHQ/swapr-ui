import { jsxs, jsx } from 'react/jsx-runtime';

const SvgExclamation = ({ ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M11 17v-2h2v2zm0-10v6h2V7z" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16",
          clipRule: "evenodd"
        }
      )
    ]
  }
);

export { SvgExclamation as default };
//# sourceMappingURL=Exclamation.mjs.map
