import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Typography from "components/ui/Typography";

export const query = graphql`
  query Gallery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/gallery/" } }) {
      nodes {
        frontmatter {
          subtitle
          title
          galleries {
            title
            image {
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

const SectionGallery = () => {
  const queryData = useStaticQuery<Queries.GalleryQuery>(query);
  const data = queryData.allMarkdownRemark.nodes[0].frontmatter;

  return (
    <section className={"bg-lightSecondary"}>
      <div className={"container py-24 "}>
        <Typography
          variant={"s54"}
          as={"h1"}
          className={"mx-auto text-center mb-4"}
        >
          {data?.title}
        </Typography>
        <Typography
          variant={"s24"}
          as={"p"}
          color={"light-dark"}
          className={"max-w-2xl text-center mx-auto"}
        >
          {data?.subtitle}
        </Typography>
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 "}>
          {data?.galleries?.map((props, index) => {
            return (
              <div className={`${index === 0 && "row-span-2"}`}>
                {props?.image?.childImageSharp && (
                  <GatsbyImage
                    image={props?.image?.childImageSharp?.gatsbyImageData}
                    alt={props?.title as string}
                    className={`${index === 0 ? "" : ""}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionGallery;
