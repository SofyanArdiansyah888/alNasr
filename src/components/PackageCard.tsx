import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FlightIcon } from "./icons";
import { EatIcon, HostelIcon, TicketIcon, VisaIcon } from "components/icons";
import Typography from "components/ui/Typography";

const PackageCard = ({
  image,
  name,
  description,
  promo,
  per,
  features,
  detailText,
}: Queries.MarkdownRemarkFrontmatterPackageDetails) => {
  if (name !== "Soon Program")
    return (
      <div className={"custom-shadow pt-6 pl-6 rounded-md"}>
        {image?.childImageSharp && (
          <GatsbyImage
            image={image?.childImageSharp.gatsbyImageData}
            className={" rounded-lg mr-6"}
            alt={"Image 1"}
          />
        )}

        {/*BEST SELLER*/}
        <div className={"flex justify-between items-center my-4 text-md"}>
          <div className={"text-primary"}>{name}</div>
          <div
            className={
              "bg-lightBlue text-secondary rounded-l-full px-6 py-2 rounded-r-none "
            }
          >
            {promo}
          </div>
        </div>

        <p className={"text-lg max-w-[250px]  font-semibold text-lightBlack"}>
          {description}
          <span className={"text-secondary"}> {per}</span>
        </p>

        <div className={"flex gap-4 my-6"}>
          {features?.map((item) => (
            <>
              {item === "flight" && <FlightIcon />}
              {item === "ticket" && <TicketIcon />}
              {item === "hostel" && <HostelIcon />}
              {item === "visa" && <VisaIcon />}
              {item === "eat" && <EatIcon />}
            </>
          ))}
        </div>
        <button
          className={
            "border-2 border-primary py-3 px-8 rounded-md text-primary text-xs mb-6"
          }
        >
          {detailText}
        </button>
      </div>
    );

  return (
    <div
      className={"custom-shadow rounded-md flex items-center justify-center"}
    >
      <Typography variant={"s24"} color={"secondary"}>
        {name}
      </Typography>
    </div>
  );
};

export default PackageCard;
