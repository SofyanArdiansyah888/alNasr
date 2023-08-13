import React from "react";

const TwitterIcon = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
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
      d="M28.212 11.6559C27.4489 11.9935 26.6396 12.2153 25.811 12.3139C26.6841 11.7911 27.3373 10.9687 27.649 9.99993C26.829 10.4879 25.93 10.8299 24.994 11.0149C24.3646 10.3415 23.5304 9.89489 22.621 9.74451C21.7116 9.59413 20.7779 9.74842 19.9653 10.1834C19.1526 10.6183 18.5064 11.3096 18.1271 12.1497C17.7478 12.9898 17.6568 13.9317 17.868 14.8289C16.2049 14.7457 14.578 14.3137 13.0927 13.5608C11.6075 12.8079 10.2972 11.7511 9.247 10.4589C8.87529 11.0974 8.67996 11.8232 8.681 12.5619C8.681 14.0119 9.42 15.2929 10.541 16.0429C9.87702 16.022 9.22765 15.8427 8.647 15.5199V15.5709C8.64697 16.5368 8.98104 17.4729 9.59253 18.2206C10.204 18.9682 11.0553 19.4814 12.002 19.6729C11.3856 19.8401 10.7393 19.8648 10.112 19.7449C10.3789 20.5763 10.8992 21.3034 11.6 21.8243C12.3008 22.3453 13.147 22.6339 14.02 22.6499C13.1524 23.3314 12.1589 23.8351 11.0964 24.1323C10.0339 24.4295 8.92329 24.5143 7.828 24.3819C9.73972 25.6113 11.9651 26.264 14.238 26.2619C21.932 26.2619 26.138 19.8889 26.138 14.3619C26.138 14.1819 26.134 13.9999 26.126 13.8209C26.9444 13.2293 27.6508 12.4955 28.212 11.6559Z"
      fill="#1DA599"
    />
  </svg>
);

export default TwitterIcon;