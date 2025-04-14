import { jsx } from 'react/jsx-runtime';

const SvgSendFill = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M4.002 4.22 5.434 3l14 8v1.736l-14 8L4 19.523l1.255-3.394.623-1.622.616-1.638h8.508v-2H6.495z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgSendFill as default };
//# sourceMappingURL=SendFill.mjs.map
