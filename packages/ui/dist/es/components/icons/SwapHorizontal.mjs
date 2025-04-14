import { jsx } from 'react/jsx-runtime';

const SvgSwapHorizontal = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "m6 11-.707-1.707 4-4 1.414 1.414L8.414 9H18v2zm12 2 .707 1.707-4 4-1.414-1.414L15.586 15H6v-2z"
      }
    )
  }
);

export { SvgSwapHorizontal as default };
//# sourceMappingURL=SwapHorizontal.mjs.map
