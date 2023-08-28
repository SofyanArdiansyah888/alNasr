import React from "react";
import FacilitiesCard from "../FacilitiesCard";
import { graphql, useStaticQuery } from "gatsby";
import Typography from "components/ui/Typography";

const query = graphql`
  query Facility {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/facility/" } }) {
      nodes {
        frontmatter {
          facility {
            subtitle
            title
            facilities {
              title
              subtitle
              icon
            }
          }
        }
      }
    }
  }
`;

const SectionFacilities = () => {
  const queryData = useStaticQuery<Queries.FacilityQuery>(query);
  const data = queryData.allMarkdownRemark.nodes[0].frontmatter?.facility;
  return (
    <section className={"bg-lightSecondary"}>
      <div className={"container py-24 "}>
        <Typography
          as={"h1"}
          variant={"s54"}
          color={"light-dark"}
          className={"mx-auto text-center mb-4"}
        >
          {data?.title}
        </Typography>
        <Typography
          as={"p"}
          variant={"s24"}
          className={"text-center max-w-xl mx-auto"}
          color={"light-dark"}
        >
          {data?.subtitle}
        </Typography>
        <div className={"grid grid-cols-1 lg:grid-cols-4 gap-8 mt-20 "}>
          {data?.facilities?.map((props, index) => (
            <FacilitiesCard {...props} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFacilities;
