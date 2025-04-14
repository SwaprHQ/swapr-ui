import { jsx } from 'react/jsx-runtime';

const SvgMinus = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M19 13H5v-2h14z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgMinus as default };
//# sourceMappingURL=Minus.mjs.map
