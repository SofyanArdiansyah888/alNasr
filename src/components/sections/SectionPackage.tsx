import React from "react";
import PackageCard from "../PackageCard";
import { EmiratesIcon, GarudaIndonesiaIcon, QatarAirwaysIcon } from "../icons";
import Typography from "components/ui/Typography";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query Packages {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/package/" } }) {
      nodes {
        frontmatter {
          subtitle
          title
          details {
            name
            description
            detailText
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            per
            promo
            features
          }
        }
      }
    }
  }
`;

const SectionPackage = () => {
  const queryData = useStaticQuery<Queries.PackagesQuery>(query);
  const data = queryData.allMarkdownRemark.nodes[0].frontmatter;
  return (
    <section className={"container py-24 "}>
      <Typography
        variant={"s54"}
        as={"h1"}
        className={"text-center mx-auto max-w-2xl"}
      >
        {data?.title}
      </Typography>

      <Typography
        variant={"s24"}
        as={"p"}
        className={"mx-auto text-center mt-4 max-w-[40rem]"}
      >
        {data?.subtitle}
      </Typography>

      <div className={"grid grid-cols-1 lg:grid-cols-3 mt-24 gap-16"}>
        {data?.details?.map((props, index) => (
          props && <PackageCard {...props} key={index} />
        ))}
      </div>


    </section>
  );
};

export default SectionPackage;
