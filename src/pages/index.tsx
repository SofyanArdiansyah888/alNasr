import React from "react";
import SectionHero from "../components/sections/SectionHero";
import SectionDream from "../components/sections/SectionDream";

const IndexPage = () => {
  return (
    <>
      <SectionHero />
      <SectionDream />
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
