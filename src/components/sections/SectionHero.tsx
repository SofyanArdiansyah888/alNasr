import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Typography from "components/ui/Typography";
import { Button } from "components/ui/Button";
import { graphql, useStaticQuery } from "gatsby";

export const HeroQuery = graphql`
  query Hero {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      nodes {
        frontmatter {
          hero {
            buttonText
            subtitle
            title
            pillText
            imageUrl {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
const SectionHero = () => {
  const queryData = useStaticQuery<Queries.HeroQuery>(HeroQuery);
  const data = queryData.allMarkdownRemark.nodes[0].frontmatter?.hero;
  return (
    <section className={"bg-gradient-yellow"}>
      <div className={"container"}>
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-2 py-24 gap-12  items-center"
          }
        >
          {/*LEFT*/}
          <div>
            <Button
              variant={"secondary"}
              size={"sm"}
              text={"s24"}
              className={"rounded-full mb-8"}
            >
              {data?.pillText}
            </Button>
            <div className={"space-y-6"}>
              <Typography variant={"s54"} as={"h1"}>
                {data?.title}
              </Typography>
              <Typography variant={"s20"} as={"p"}>
                {data?.subtitle}
              </Typography>
              <Button>{data?.buttonText}</Button>
            </div>
          </div>

          {/*RIGHT*/}
          <div className={"w-[350px] md:w-[500px] justify-center"}>
            {data?.imageUrl?.childImageSharp && (
              <GatsbyImage
                image={data.imageUrl.childImageSharp.gatsbyImageData}
                alt={"Dream Image"}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
