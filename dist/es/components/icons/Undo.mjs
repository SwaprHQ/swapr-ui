import { jsx } from 'react/jsx-runtime';

const SvgUndo = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "m7.414 9 2.293-2.293-1.414-1.414L3.586 10l4.707 4.707 1.414-1.414L7.414 11H15a3 3 0 1 1 0 6h-5v2h5a5 5 0 0 0 0-10z"
      }
    )
  }
);

export { SvgUndo as default };
//# sourceMappingURL=Undo.mjs.map
