import { jsxs, jsx } from 'react/jsx-runtime';

const SvgCamera = ({ ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15.535 3h-7.07l-2 3H2v14h20V6h-4.465zm-8 5 2-3h4.93l2 3H20v10H4V8z",
          clipRule: "evenodd"
        }
      )
    ]
  }
);

export { SvgCamera as default };
//# sourceMappingURL=Camera.mjs.map
