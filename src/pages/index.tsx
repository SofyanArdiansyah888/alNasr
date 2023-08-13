import React from "react";
import SectionHero from "../components/sections/SectionHero";
import SectionDream from "../components/sections/SectionDream";
import SectionPackage from "../components/sections/SectionPackage";
import SectionFacilities from "../components/sections/SectionFacilities";
import SectionTestimonials from "../components/sections/SectionTestimonials";
import SectionGallery from "../components/sections/SectionGallery";
import Footer from "../components/sections/Footer";

const IndexPage = () => {
  return (
    <main>
      <SectionHero />
      <SectionDream />
      <SectionPackage />
      <SectionFacilities />
      <SectionTestimonials />
      <SectionGallery />
      <Footer />
    </main>
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
