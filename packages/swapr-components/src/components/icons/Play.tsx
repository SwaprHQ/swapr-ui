import * as React from "react";
const SvgPlay = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 12 7 5.072v13.856zm2.5-.866v1.732l-15 8.66L5 20.66V3.34l1.5-.866z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlay;
