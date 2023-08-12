import React from "react";
import PackageCard from "../PackageCard";

const SectionPackage = () => {
  return (
    <section className={"container py-24 "}>
      <h1 className={"max-w-xl text-center mx-auto font-semibold text-lightBlack"}>Al Nasr Special Umrah and Hajj Packages</h1>
      <p className={"text-center mt-4 max-w-[30rem] mx-auto text-lightBlack font-semibold"}>
        Choose your package according to your needs, guaranteed cheap and
        complete
      </p>
        <div className={"grid grid-cols-1 lg:grid-cols-3 mt-24 gap-16"}>
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
        </div>
    </section>
  );
};

export default SectionPackage;