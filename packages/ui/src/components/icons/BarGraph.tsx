const SvgBarGraph = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 2h5v20h-5zm2 2v16h1V4zM3 8h5v14H3zm2 2v10h1V10zm17 1h-5v11h5zm-3 9v-7h1v7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBarGraph;
