import React from "react";

const SleepIcon = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="36" height="36" rx="10" fill="#C1FFFA" />
    <path
      d="M13 19C14.66 19 16 17.66 16 16C16 14.34 14.66 13 13 13C11.34 13 10 14.34 10 16C10 17.66 11.34 19 13 19ZM25 13H17V20H9V11H7V26H9V23H27V26H29V17C29 14.79 27.21 13 25 13Z"
      fill="#1DA599"
    />
  </svg>
);

export default SleepIcon;