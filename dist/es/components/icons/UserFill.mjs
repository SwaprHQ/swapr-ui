import { jsx } from 'react/jsx-runtime';

const SvgUserFill = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0m-9 7a5 5 0 0 0-5 5v3h18v-3a5 5 0 0 0-5-5z"
      }
    )
  }
);

export { SvgUserFill as default };
//# sourceMappingURL=UserFill.mjs.map
