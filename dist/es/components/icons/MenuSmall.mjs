import { jsx } from 'react/jsx-runtime';

const SvgMenuSmall = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M19 9H5V7h14zm0 4H5v-2h14zM5 17h14v-2H5z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgMenuSmall as default };
//# sourceMappingURL=MenuSmall.mjs.map
