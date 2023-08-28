import React from "react";
import Typography from "components/ui/Typography";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query Testimony {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/testimony/" } }) {
      nodes {
        frontmatter {
          testimony {
            subtitle
            title
            customers {
              name
              description
              package
              star
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const SectionTestimonials = () => {
  const queryData = useStaticQuery<Queries.TestimonyQuery>(query);
  const data = queryData?.allMarkdownRemark?.nodes[0]?.frontmatter?.testimony;

  return (
    <section className={"container"}>
      <Typography
        variant={"s54"}
        as={"h1"}
        color={"light-dark"}
        className={"!text-right"}
      >
        {data?.title}
      </Typography>
      <Typography variant={"s20"} as={"p"} className={"text-right"}>
        {data?.subtitle}
      </Typography>
    </section>
  );
};

export default SectionTestimonials;
