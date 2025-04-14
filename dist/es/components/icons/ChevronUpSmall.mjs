import { jsx } from 'react/jsx-runtime';

const SvgChevronUpSmall = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "m12 9 4.884 4.884-1.768 1.768L12 12.536l-3.116 3.116-1.768-1.768z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgChevronUpSmall as default };
//# sourceMappingURL=ChevronUpSmall.mjs.map
