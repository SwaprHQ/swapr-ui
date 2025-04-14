import { jsx } from 'react/jsx-runtime';

const SvgChevronLeft = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "m9.768 12 5.116-5.116-1.768-1.768L6.232 12l6.884 6.884 1.768-1.768z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgChevronLeft as default };
//# sourceMappingURL=ChevronLeft.mjs.map
