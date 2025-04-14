import { jsx } from 'react/jsx-runtime';

const SvgTick = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "m3.616 12.884 1.768-1.768 4.066 4.066 9.015-9.016 1.768 1.768L9.45 18.718z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgTick as default };
//# sourceMappingURL=Tick.mjs.map
