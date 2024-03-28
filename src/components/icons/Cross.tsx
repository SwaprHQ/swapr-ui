import * as React from "react";
const SvgCross = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m13.768 12 4.773 4.773-1.768 1.768L12 13.768 7.227 18.54l-1.768-1.768L10.232 12 5.46 7.227l1.768-1.768L12 10.232l4.773-4.773 1.768 1.768z"
    />
  </svg>
);
export default SvgCross;
