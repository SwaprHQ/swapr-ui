import { jsx } from 'react/jsx-runtime';

const SvgFarm = ({ ...props }) => /* @__PURE__ */ jsx(
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
        d: "M11 11.394V21h2v-6.405c1.093-.034 3.691-.32 5.754-2.389 2.456-2.482 2.248-6.486 2.238-6.655l-.022-.327h-.337c-.177 0-4.296-.077-6.76 2.405a7.1 7.1 0 0 0-1.53 2.389c-.088-1.395-.49-3.865-2.21-5.595C7.66 1.925 3.541 1.996 3.364 2.001h-.336l-.022.327c0 .17-.229 4.174 2.237 6.656 2.066 2.09 4.664 2.374 5.757 2.41"
      }
    )
  }
);

export { SvgFarm as default };
//# sourceMappingURL=Farm.mjs.map
