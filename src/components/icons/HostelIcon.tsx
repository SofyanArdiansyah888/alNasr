import React from "react";

const HostelIcon = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
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
      d="M23 25H25V17H19V25H21V19H23V25ZM9 25V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H24C24.2652 9 24.5196 9.10536 24.7071 9.29289C24.8946 9.48043 25 9.73478 25 10V15H27V25H28V27H8V25H9ZM13 17V19H15V17H13ZM13 21V23H15V21H13ZM13 13V15H15V13H13Z"
      fill="#1DA599"
    />
  </svg>
);

export default HostelIcon;