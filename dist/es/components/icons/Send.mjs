import { jsx } from 'react/jsx-runtime';

const SvgSend = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M5.432 3.13 4 4.35l3 8 .936.648h5v-2H8.63L6.845 6.241l10.076 5.757-10.044 5.74 1.054-2.74H5.788L4.003 19.64l1.43 1.227 14-8V11.13z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgSend as default };
//# sourceMappingURL=Send.mjs.map
