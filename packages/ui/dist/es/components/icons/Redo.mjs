import { jsx } from 'react/jsx-runtime';

const SvgRedo = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "m16.586 9-2.293-2.293 1.414-1.414L20.414 10l-4.707 4.707-1.414-1.414L16.586 11H9a3 3 0 1 0 0 6h5v2H9A5 5 0 0 1 9 9z"
      }
    )
  }
);

export { SvgRedo as default };
//# sourceMappingURL=Redo.mjs.map
