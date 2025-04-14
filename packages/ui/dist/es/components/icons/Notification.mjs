import { jsxs, jsx } from 'react/jsx-runtime';

const SvgNotification = ({ ...props }) => /* @__PURE__ */ jsxs(
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
          d: "M17 12.414V10c.711 0 1.387-.148 2-.416v2.002l2 2V19h-5a4.002 4.002 0 0 1-5.775 3.585A4 4 0 0 1 8 19H3v-5.414l2-2V9a7 7 0 0 1 7.952-6.936 5 5 0 0 0-.852 1.937L12 4a5 5 0 0 0-5 5v3.414l-2 2V17h14v-2.586zM10 19a2.002 2.002 0 0 0 2.882 1.795A2 2 0 0 0 14 19z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
          clipRule: "evenodd"
        }
      )
    ]
  }
);

export { SvgNotification as default };
//# sourceMappingURL=Notification.mjs.map
