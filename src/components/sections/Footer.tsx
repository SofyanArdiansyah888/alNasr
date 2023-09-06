import React from "react";
import { LogoIcon } from "../icons";
import { graphql, useStaticQuery } from "gatsby";
import FooterLink from "components/FooterLink";
import {
  FacebookIcon,
  InstagramIcon,
  LogoTextIcon,
  TwitterIcon,
  YoutubeIcon,
} from "components/icons";

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
          <div className={" max-h-fit grid shrink-0"}>
            <LogoTextIcon />
            <p className={"text-sm text-white "}>{data?.title}</p>
          </div>
          {data?.links?.map((props) => props && <FooterLink {...props} />)}
        </div>
        <hr className={"my-6"} />
        <div className={"flex flex-col lg:flex-row gap-4 lg:gap-0  justify-between text-white items-center"}>
          <p className={"text-xs"}>{data?.copyright}</p>
          <div className={"flex  gap-4"}>
            {data?.socials?.map((social, index) => {
              return (
                <div key={index} className={"flex gap-1"}>
                  {social?.icon === "instagram" && <InstagramIcon />}
                  {social?.icon === "facebook" && <FacebookIcon />}
                  {social?.icon === "twitter" && <TwitterIcon />}
                  {social?.icon === "youtube" && <YoutubeIcon />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
