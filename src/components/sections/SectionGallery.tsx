import React from "react";
import FacilitiesCard from "../FacilitiesCard";
import {StaticImage} from "gatsby-plugin-image";

const SectionGallery = () => {
    return <section className={"container py-24 bg-lightSecondary"}>
        <h1 className={"max-w-4xl text-center mx-auto font-bold text-lightBlack"}>
            Gallery Footage In Saudi Arabia
        </h1>
        <p
            className={
                "text-center text-xl mt-4 max-w-[32rem] mx-auto text-[#454545]"
            }
        >
            We provide comfort for our customers, with the various facilities we provide that we provide
        </p>
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 "}>
              <StaticImage src={"../../assets/images/image5.png"} alt={"Image I"} className={"row-span-2"} />
              <StaticImage src={"../../assets/images/image1.png"} alt={"Image I"} />
              <StaticImage src={"../../assets/images/image1.png"} alt={"Image I"} />
              <StaticImage src={"../../assets/images/image1.png"} alt={"Image I"} />
              <StaticImage src={"../../assets/images/image1.png"} alt={"Image I"} />
        </div>
    </section>
}

export default SectionGallery;