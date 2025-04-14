import { jsxs, jsx } from 'react/jsx-runtime';

const SvgLock = ({ ...props }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M10.5 16v-3h3v3H13v2h-2v-2z" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7 9V7a5 5 0 0 1 10 0v2h3v13H4V9zm2-2a3 3 0 1 1 6 0v2H9zm-3 4v9h12v-9z",
          clipRule: "evenodd"
        }
      )
    ]
  }
);

export { SvgLock as default };
//# sourceMappingURL=Lock.mjs.map
