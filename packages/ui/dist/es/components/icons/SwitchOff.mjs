import { jsx } from 'react/jsx-runtime';

const SvgSwitchOff = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M13 2v11h-2V2zM7.05 5.636l-.707.707a8 8 0 1 0 11.314 0l-.707-.707 1.414-1.414.707.707c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0-3.905-10.237 0-14.142l.707-.707z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgSwitchOff as default };
//# sourceMappingURL=SwitchOff.mjs.map
