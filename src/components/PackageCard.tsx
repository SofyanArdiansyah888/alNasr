import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PackageCard = () => {
  return (
    <div className={"custom-shadow pt-6 pl-6 rounded-md"}>
      <StaticImage
        src={"../assets/images/image8.png"}
        className={" rounded-lg mr-6"}
        alt={"Image 1"}
      />

      {/*BEST SELLER*/}
      <div className={"flex justify-between items-center my-4 text-md"}>
        <div className={"text-primary"}>Bronze</div>
        <div className={"bg-lightBlue text-secondary rounded-l-full px-6 py-2 rounded-r-none "}>Best Seller</div>
      </div>

      <p className={"text-lg font-semibold text-lightBlack"}>
        Al Nasr Special Umrah 9 Days
      </p>
      <p className={"text-lg font-semibold text-lightBlack"}>
        $ 1,950/ <span className={"text-secondary"}>person</span>
      </p>
      <div className={"flex gap-4 my-6"}>
        <StaticImage src={"../assets/icons/flight.svg"} alt={""} />
        <StaticImage src={"../assets/icons/flight.svg"} alt={""} />
        <StaticImage src={"../assets/icons/flight.svg"} alt={""} />
        <StaticImage src={"../assets/icons/flight.svg"} alt={""} />
      </div>
      <button
        className={
          "border-2 border-primary py-3 px-8 rounded-md text-primary text-xs mb-6"
        }
      >
        View Detail
      </button>
    </div>
  );
};

export default PackageCard;