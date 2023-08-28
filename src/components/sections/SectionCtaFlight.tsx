import {
  EmiratesIcon,
  GarudaIndonesiaIcon,
  QatarAirwaysIcon,
  SaudiAirlinesIcon,
  StarIcon,
} from "components/icons";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const query = graphql`
  query CTAFlight {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/cta-flight/" } }) {
      nodes {
        frontmatter {
          cta {
            subtitle
            title
            rating
            images
          }
        }
      }
    }
  }
`;

const SectionCtaFlight = () => {
  const queryData = useStaticQuery<Queries.CTAFlightQuery>(query);
  const data = queryData.allMarkdownRemark.nodes[0].frontmatter?.cta;
  return (
    <section className={"container pb-24 "}>
      <div className={"flex flex-row mt-24 gap-24 items-center"}>
        <div className={"text-lightBlack space-y-4"}>
          <h4 className={"max-w-[16rem] leading-tight font-[900] text-3xl"}>
            {data?.title}
          </h4>
          <p className={"max-w-[30rem] text-xl"}>{data?.subtitle}</p>
          <button
            className={"btn-blue text-sm !py-2 px-1 flex gap-2 items-center"}
          >
            <StarIcon className={"w-4 h-4"} />
            {data?.rating}
          </button>
        </div>
        <div
          className={"space-x-12 max-h-[100px] flex overflow-x-scroll w-screen"}
        >
          <GarudaIndonesiaIcon />
          <QatarAirwaysIcon />
          <EmiratesIcon />
          <SaudiAirlinesIcon />
        </div>
      </div>
    </section>
  );
};

export default SectionCtaFlight;
