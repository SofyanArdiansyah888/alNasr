import { Button } from "components/ui/Button";
import Typography from "components/ui/Typography";
import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import {StarIcon} from "components/icons";

const TestimonialsCard = (
  props: Queries.MarkdownRemarkFrontmatterTestimonyCustomers,
) => {

  return (
    <div
      className={
        "custom-shadow rounded-xl py-[20px] px-8 w-[450px] shrink-0 flex items-start gap-8"
      }
    >
      <div className={"space-y-4 shrink-0"}>
        {props.image && (
          <GatsbyImage
            alt={"Person Image"}
            image={
              props?.image?.childImageSharp?.gatsbyImageData as IGatsbyImageData
            }
          />
        )}
        <Typography className={"flex gap-2 items-center text-xs bg-lightBlue rounded-full px-2 !w-[70px] py-1 mx-auto text-center justify-center"} color={"secondary"}>
          <StarIcon className={"w-4 h-4"}/> {props?.star}
        </Typography>
      </div>
      <div>
        <Button
          variant={"secondary"}
          size={"sm"}
          className={"rounded-full !px-4 !text-xs !text-left"}
        >
          {props?.package}
        </Button>
        <Typography variant={"s24"} className={"mt-4"}>
          {props?.name}
        </Typography>
        <Typography variant={"s14"} className={"text-justify"}>
          {props?.description}
        </Typography>
      </div>
    </div>
  );
};

export default TestimonialsCard;
