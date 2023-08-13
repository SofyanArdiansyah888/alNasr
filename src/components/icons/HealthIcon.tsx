import React from "react";

const HealthIcon = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.962 24.4691C12.019 22.2141 8 18.4891 8 14.9671C8 9.08315 13.5 6.88615 18 11.4301C22.5 6.88615 28 9.08315 28 14.9661C28 18.4891 23.98 22.2141 21.038 24.4691C19.706 25.4891 19.04 26.0001 18 26.0001C16.96 26.0001 16.294 25.4901 14.962 24.4691ZM22.5 12.2501C22.6989 12.2501 22.8897 12.3292 23.0303 12.4698C23.171 12.6105 23.25 12.8012 23.25 13.0001V14.2501H24.5C24.6989 14.2501 24.8897 14.3292 25.0303 14.4698C25.171 14.6105 25.25 14.8012 25.25 15.0001C25.25 15.1991 25.171 15.3898 25.0303 15.5305C24.8897 15.6711 24.6989 15.7501 24.5 15.7501H23.25V17.0001C23.25 17.1991 23.171 17.3898 23.0303 17.5305C22.8897 17.6711 22.6989 17.7501 22.5 17.7501C22.3011 17.7501 22.1103 17.6711 21.9697 17.5305C21.829 17.3898 21.75 17.1991 21.75 17.0001V15.7501H20.5C20.3011 15.7501 20.1103 15.6711 19.9697 15.5305C19.829 15.3898 19.75 15.1991 19.75 15.0001C19.75 14.8012 19.829 14.6105 19.9697 14.4698C20.1103 14.3292 20.3011 14.2501 20.5 14.2501H21.75V13.0001C21.75 12.8012 21.829 12.6105 21.9697 12.4698C22.1103 12.3292 22.3011 12.2501 22.5 12.2501Z"
      fill="#1DA599"
    />
  </svg>
);

export default HealthIcon;