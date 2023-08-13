import React from "react";
import FacilitiesCard from "../FacilitiesCard";

const SectionFacilities = () => {
  return (
    <section className={"container py-24 bg-lightSecondary"}>
      <h1 className={"max-w-4xl text-center mx-auto font-bold text-lightBlack"}>
        Facilities We Provide For You
      </h1>
      <p
        className={
          "text-center text-xl mt-4 max-w-[32rem] mx-auto text-[#454545]"
        }
      >
        We provide comfort for our customers, with the various facilities we
        provide that we provide
      </p>
        <div className={"grid grid-cols-1 lg:grid-cols-4 gap-8 mt-20 "}>
            <FacilitiesCard />
            <FacilitiesCard />
            <FacilitiesCard />
            <FacilitiesCard />
            <FacilitiesCard />
            <FacilitiesCard />
            <FacilitiesCard />
            <FacilitiesCard />
        </div>
    </section>
  );
};

export default SectionFacilities;