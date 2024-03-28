import * as React from "react";
const SvgCamera = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.535 3h-7.07l-2 3H2v14h20V6h-4.465zm-8 5 2-3h4.93l2 3H20v10H4V8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCamera;
