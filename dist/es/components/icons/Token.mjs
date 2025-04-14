import { jsxs, jsx } from 'react/jsx-runtime';

const SvgToken = ({ ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "m17 9-2-2-2 2 2 2z" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M9 9a6 6 0 1 1 12 0A6 6 0 0 1 9 9m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M7.007 9.339A6.002 6.002 0 0 0 9 21a6 6 0 0 0 5.661-4.007 8 8 0 0 1-2.015-.345 4 4 0 1 1-5.294-5.294 8 8 0 0 1-.345-2.015"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M8.432 13.568 7 15l2 2 1.432-1.432a8 8 0 0 1-2-2"
        }
      )
    ]
  }
);

export { SvgToken as default };
//# sourceMappingURL=Token.mjs.map
