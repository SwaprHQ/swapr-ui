import { jsx } from 'react/jsx-runtime';

const SvgEyeViewFill = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M7.05 6.536 1.586 12l5.464 5.465a7 7 0 0 0 9.9 0L22.414 12 16.95 6.536a7 7 0 0 0-9.9 0M15 11h-2V9h-1a3 3 0 1 0 3 3z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgEyeViewFill as default };
//# sourceMappingURL=EyeViewFill.mjs.map
