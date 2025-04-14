import { jsx } from 'react/jsx-runtime';

const SvgPlus = ({ ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M11 13v6h2v-6h6v-2h-6V5h-2v6H5v2z" })
  }
);

export { SvgPlus as default };
//# sourceMappingURL=Plus.mjs.map
