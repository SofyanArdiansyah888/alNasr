import React from "react";
import SectionHero from "../components/sections/SectionHero";
import SectionDream from "../components/sections/SectionDream";
import SectionPackage from "../components/sections/SectionPackage";

const IndexPage = () => {
  return (
    <>
      <SectionHero />
      <SectionDream />
      <SectionPackage />
    </>
  );
};

// export const query = graphql`
//   query {
//     allFile {
//       nodes {
//         name
//         relativePath
//         publicURL
//       }
//     }
//   }
// `

export default IndexPage;
