import * as React from "react";
const SvgSearch = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 4a7 7 0 1 0 4.192 12.606l3.515 3.515 1.414-1.414-3.515-3.515A7 7 0 0 0 11 4m-5 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
