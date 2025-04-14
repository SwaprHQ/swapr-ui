import { jsx } from 'react/jsx-runtime';

const SvgArrowTopLeft = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M7.25 9.018V17h-2.5V4.75H17v2.5H9.018l9.866 9.866-1.768 1.768z"
      }
    )
  }
);

export { SvgArrowTopLeft as default };
//# sourceMappingURL=ArrowTopLeft.mjs.map
