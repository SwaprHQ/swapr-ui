import { jsx } from 'react/jsx-runtime';

const SvgArrowDown = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "m10.75 14.982-3.866-3.866-1.768 1.768L12 19.768l6.884-6.884-1.768-1.768-3.866 3.866V6h-2.5z"
      }
    )
  }
);

export { SvgArrowDown as default };
//# sourceMappingURL=ArrowDown.mjs.map
