import { jsx } from 'react/jsx-runtime';

const SvgResizer = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M6 15.071 15.071 6l1.414 1.414-9.07 9.071zm5 1.172L16.243 11l1.414 1.414-5.243 5.243z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgResizer as default };
//# sourceMappingURL=Resizer.mjs.map
