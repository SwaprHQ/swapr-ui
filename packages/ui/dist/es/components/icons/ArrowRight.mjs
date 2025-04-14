import { jsx } from 'react/jsx-runtime';

const SvgArrowRight = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "m14.982 10.75-3.866-3.866 1.768-1.768L19.768 12l-6.884 6.884-1.768-1.768 3.866-3.866H6v-2.5z"
      }
    )
  }
);

export { SvgArrowRight as default };
//# sourceMappingURL=ArrowRight.mjs.map
