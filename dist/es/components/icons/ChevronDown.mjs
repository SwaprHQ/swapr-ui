import { jsx } from 'react/jsx-runtime';

const SvgChevronDown = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M12 16.652 5.116 9.768 6.884 8 12 13.116 17.116 8l1.768 1.768z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgChevronDown as default };
//# sourceMappingURL=ChevronDown.mjs.map
