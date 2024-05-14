import * as React from "react";
const SvgChevronUp = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12 8 6.884 6.884-1.768 1.768L12 11.535l-5.116 5.117-1.768-1.768z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronUp;
