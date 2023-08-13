import React from "react";

const LogoIcon = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    width="51"
    height="71"
    viewBox="0 0 51 71"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Logo">
      <path
        id="Line 1"
        d="M2.91345 68L10.71 58.3569C11.5733 57.2892 12.0442 55.9577 12.0442 54.5846L12.0442 23.8826C12.0442 22.4276 12.5729 21.0222 13.5319 19.928L25.7892 5.94204C28.3406 3.03085 32.9402 3.26175 35.1872 6.41381L48.0866 24.5088"
        stroke="#FFC265"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        id="Line 2"
        d="M2.91345 68L2.91345 23.6278C2.91345 22.2275 3.40318 20.8714 4.29783 19.7942L15.6784 6.09187C18.2185 3.03356 22.9767 3.24643 25.2335 6.51934L34.9018 20.5403C35.8052 21.8505 37.1921 22.748 38.7574 23.0355L48.0866 24.7491"
        stroke="#1DA599"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default LogoIcon;