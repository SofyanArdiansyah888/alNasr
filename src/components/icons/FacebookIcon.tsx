import React from "react";

const FacebookIcon = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="36" height="36" rx="10" fill="white" />
    <path
      d="M28 18C28 12.48 23.52 8 18 8C12.48 8 8 12.48 8 18C8 22.84 11.44 26.87 16 27.8V21H14V18H16V15.5C16 13.57 17.57 12 19.5 12H22V15H20C19.45 15 19 15.45 19 16V18H22V21H19V27.95C24.05 27.45 28 23.19 28 18Z"
      fill="#1DA599"
    />
  </svg>
);

export default FacebookIcon;