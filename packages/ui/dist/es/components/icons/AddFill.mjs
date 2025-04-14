import { jsx } from 'react/jsx-runtime';

const SvgAddFill = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-1-5v-4H7v-2h4V7h2v4h4v2h-4v4z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgAddFill as default };
//# sourceMappingURL=AddFill.mjs.map
