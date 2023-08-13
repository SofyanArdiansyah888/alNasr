import React from "react";

const SafetyIcon = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
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
      d="M18 8L10 11V17.09C10 22.14 13.41 26.85 18 28C22.59 26.85 26 22.14 26 17.09V11L18 8ZM18 23C15.24 23 13 20.76 13 18C13 15.24 15.24 13 18 13C20.76 13 23 15.24 23 18C23 20.76 20.76 23 18 23ZM19.65 20.35L17.5 18.2V15H18.5V17.79L20.35 19.64L19.65 20.35Z"
      fill="#1DA599"
    />
  </svg>
);

export default SafetyIcon;