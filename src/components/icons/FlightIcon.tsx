import React from "react";

const FlightIcon = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
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
      d="M8.5 25.0001H27.5V27.0001H8.5V25.0001ZM28.07 15.6401C27.86 14.8401 27.03 14.3601 26.23 14.5801L20.92 16.0001L14 9.57007L12.09 10.0801L16.23 17.2501L11.26 18.5801L9.29 17.0401L7.84 17.4301L9.66 20.5901L10.43 21.9201L12.03 21.5001L17.34 20.0701L21.69 18.9101L27 17.5001C27.81 17.2601 28.28 16.4401 28.07 15.6401Z"
      fill="#1DA599"
    />
  </svg>
);

export default FlightIcon;