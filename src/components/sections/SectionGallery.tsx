import React from "react";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Typography from "components/ui/Typography";

export const query = graphql`
  query Gallery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/gallery/" } }) {
      nodes {
        frontmatter {
          gallery {
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
  }
`;

const SectionGallery = () => {
  const queryData = useStaticQuery<Queries.GalleryQuery>(query);
  const data = queryData.allMarkdownRemark.nodes[0].frontmatter?.gallery;

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
        <div className={"grid grid-cols-1 lg:grid-cols-4  mt-20 gap-4 "}>
          {data?.galleries?.map((props, index) => {
            return (
              <div
                className={`grid ${index === 0 && "row-span-2 col-span-2"} `}
              >
                <div className={`${index === 0 ? " w-full " : ""} rounded-xl`}>
                  <GatsbyImage
                    image={
                      props?.image?.childImageSharp
                        ?.gatsbyImageData as IGatsbyImageData
                    }
                    alt={props?.title as string}
                    className={`${index === 0 && "h-[660px] w-full"} rounded-xl brightness-90`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionGallery;
