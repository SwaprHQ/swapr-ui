import { jsx } from 'react/jsx-runtime';

const SvgChevronRight = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M14.232 12 9.116 6.884l1.768-1.768L17.768 12l-6.884 6.884-1.768-1.768z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgChevronRight as default };
//# sourceMappingURL=ChevronRight.mjs.map
