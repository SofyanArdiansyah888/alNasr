import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Typography from "components/ui/Typography";
import FlightIcon from "components/icons/FlightIcon";
import TicketIcon from "components/icons/TicketIcon";
import HostelIcon from "components/icons/HostelIcon";
import { Button } from "components/ui/Button";
import VisaIcon from "components/icons/VisaIcon";
import { graphql, useStaticQuery } from "gatsby";

export const query = graphql`
  query Dream {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/dream/" } }) {
      nodes {
        frontmatter {
          dream {
            buttonText
            buttonTextOutline
            subtitle
            title
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            features {
              icon
              title
            }
          }
        }
      }
    }
  }
`;
const SectionDream = () => {
  const queryData = useStaticQuery<Queries.DreamQuery>(query);
  const data = queryData.allMarkdownRemark.nodes[0].frontmatter?.dream;
  return (
    <section className={" bg-lightSecondary"}>
      <div className={"flex flex-col-reverse lg:flex-row gap-24  py-24 container"}>
        {/*LEFT*/}
        <div className={"w-[350px] lg:w-3/4 mx-auto"}>
          {data?.image?.childImageSharp && (
            <GatsbyImage
              image={data?.image?.childImageSharp.gatsbyImageData}
              alt={data?.title as string}
            />
          )}
        </div>
        {/*RIGHT*/}
        <div className={"space-y-8 w-full"}>
          <Typography variant={"s54"} as={"h1"} className={"text-left"}>
            {data?.title}
          </Typography>
          <Typography variant={"s20"} as={"p"}>
            {data?.subtitle}
          </Typography>
          <ul className={"space-y-4 "}>
            {data?.features?.map((item, index) => (
              <li key={index}>
                <Typography
                  variant={"s20"}
                  className={"flex gap-4 items-center"}
                >
                  {item?.icon === "flight" && <FlightIcon />}
                  {item?.icon === "ticket" && <TicketIcon />}
                  {item?.icon === "hostel" && <HostelIcon />}
                  {item?.icon === "visa" && <VisaIcon />}
                  {item?.title}
                </Typography>
              </li>
            ))}
          </ul>
          <div className={"flex gap-4 lg:gap-12"}>
            <Button>{data?.buttonText}</Button>
            <Button variant={"outline"}>{data?.buttonTextOutline}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDream;
