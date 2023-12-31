import React from "react";
import SectionHero from "components/sections/SectionHero";
import SectionDream from "components/sections/SectionDream";
import SectionPackage from "components/sections/SectionPackage";
import SectionFacilities from "components/sections/SectionFacilities";
import SectionTestimonials from "components/sections/SectionTestimonials";
import SectionGallery from "components/sections/SectionGallery";
import Footer from "components/sections/Footer";
import SectionCtaFlight from "components/sections/SectionCtaFlight";
import Navbar from "components/sections/Navbar";

const IndexPage = () => {
  return (
    <>
      <main>
        <Navbar />
        <SectionHero />
        <SectionDream />
        <SectionPackage />
        <SectionCtaFlight />
        <SectionFacilities />
        <SectionTestimonials />
        <SectionGallery />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
