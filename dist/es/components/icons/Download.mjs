import { jsxs, jsx } from 'react/jsx-runtime';

const SvgDownload = ({ ...props }) => /* @__PURE__ */ jsxs(
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
          d: "m13 13.586 4.657-4.657 1.414 1.414L12 17.414l-7.071-7.07 1.414-1.415L11 13.586V3h2z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M5 15v4h14v-4h2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z"
        }
      )
    ]
  }
);

export { SvgDownload as default };
//# sourceMappingURL=Download.mjs.map
