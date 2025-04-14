import { jsx } from 'react/jsx-runtime';

const SvgDayFill = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m7-11v3h-2V1zm0 19v3h-2v-3zm7.485-15.071L18.364 7.05 16.95 5.636l2.121-2.121zM7.05 18.364l-2.12 2.121-1.414-1.414 2.121-2.121 1.414 1.414zm13.435.707-2.121-2.121-1.414 1.414 2.121 2.121zM7.05 5.636 4.93 3.515 3.515 4.929 5.636 7.05zM23 13h-3v-2h3zM4 13H1v-2h3z",
        clipRule: "evenodd"
      }
    )
  }
);

export { SvgDayFill as default };
//# sourceMappingURL=DayFill.mjs.map
