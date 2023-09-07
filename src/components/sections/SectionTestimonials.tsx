import React from "react";
import Typography from "components/ui/Typography";
import { graphql, useStaticQuery } from "gatsby";
import { Button } from "components/ui/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "components/icons";
import TestimonialsCard from "components/TestimonialsCard";

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
const SectionTestimonials = () => {
  const queryData = useStaticQuery<Queries.TestimonyQuery>(query);
  const data = queryData?.allMarkdownRemark?.nodes[0]?.frontmatter?.testimony;

  return (
    <section className={"container pt-24 pb-32 "}>
      <div className={"w-full flex justify-end "}>
        <Typography
          variant={"s54"}
          as={"h1"}
          color={"light-dark"}
          className={"!text-right max-w-2xl"}
        >
          {data?.title}
        </Typography>
      </div>

      <div className={"flex justify-between items-center mt-4"}>
        <Button size={"md"} className={"flex gap-3 !px-6"}>
          <ArrowLeftIcon />
          Previous
        </Button>
        <Typography variant={"s20"} as={"p"} className={"text-right max-w-lg"}>
          {data?.subtitle}
        </Typography>
      </div>

      <div
        className={
          "overflow-x-scroll max-w-full py-4 px-2 mt-12 flex relative gap-6 "
        }
      >
        {data?.customers?.map((props) => {
          //@ts-ignore
          return <TestimonialsCard {...props} />;
        })}
      </div>

      <div
        className={
          "overflow-x-scroll max-w-full py-4 px-2  flex relative gap-6 "
        }
      >
        {data?.customers?.map((props) => {
          //@ts-ignore
          return <TestimonialsCard {...props} />;
        })}
      </div>
      <Button size={"md"} className={"flex gap-3 float-right mt-8 !px-6 "}>
        Next
        <ArrowRightIcon />
      </Button>
    </section>
  );
};

export default SectionTestimonials;
