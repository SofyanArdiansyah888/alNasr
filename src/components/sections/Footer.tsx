import React from "react";
import { LogoIcon } from "../icons";
import { graphql, useStaticQuery } from "gatsby";
import FooterLink from "components/FooterLink";

const footerQuery = graphql`
  query Footer {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/footer/" } }) {
      nodes {
        frontmatter {
          footer {
            copyright
            links {
              submenus {
                link
                title
              }
              title
            }
            title
            socials {
              icon
              link
            }
          }
        }
      }
    }
  }
`;
const Footer = () => {
  const queryData = useStaticQuery<Queries.FooterQuery>(footerQuery);
  const data = queryData?.allMarkdownRemark?.nodes[0].frontmatter?.footer;

  return (
    <footer className={"bg-secondary "}>
      <div className={"container pt-12 pb-6 "}>
        <div className={"grid grid-cols-1 lg:grid-cols-5 gap-12"}>
          <div className={" max-h-fit"}>
            <div className={"flex flex-row py-3 px-6 bg-white rounded-md"}>
              <div className={"flex gap-2"}>
                <LogoIcon className={"w-full"} />
              </div>

              <div className={"space-y-0 text-secondary"}>
                <h6 className={"!text-sm"}>Al Hajj</h6>
                <h6 className={"!text-sm"}>Umrah</h6>
              </div>
            </div>
            <p className={"text-sm text-white pt-4"}>{data?.title}</p>
          </div>
          {data?.links?.map((props) => props && <FooterLink {...props} />)}
        </div>
        <hr className={"my-6"} />
        <div className={"flex justify-between text-white items-center"}>
          <p className={"text-xs"}>{data?.copyright}</p>
          <div className={"flex gap-4"}></div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
