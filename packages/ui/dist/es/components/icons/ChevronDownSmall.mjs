import { jsx } from 'react/jsx-runtime';

const SvgChevronDownSmall = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "m12 15.652-4.884-4.884L8.884 9 12 12.116 15.116 9l1.768 1.768z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgChevronDownSmall as default };
//# sourceMappingURL=ChevronDownSmall.mjs.map
