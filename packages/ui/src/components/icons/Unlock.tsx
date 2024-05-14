import * as React from "react";
const SvgUnlock = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M13.5 16H13v2h-2v-2h-.5v-3h3z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2a5 5 0 0 0-5 5h2a3 3 0 1 1 6 0v2H4v13h16V9h-3V7a5 5 0 0 0-5-5m-6 9v9h12v-9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnlock;
