import React from "react";
import PackageCard from "../PackageCard";
import {StaticImage} from "gatsby-plugin-image";

const SectionPackage = () => {
  return (
    <section className={"container py-24 "}>
      <h1 className={"max-w-3xl text-center mx-auto font-bold text-lightBlack"}>Al Nasr Special Umrah and Hajj Packages</h1>
      <p className={"text-center text-xl mt-4 max-w-[30rem] mx-auto text-[#454545]"}>
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
        <div className={"flex flex-row my-16 gap-24 items-center"}>
            <div className={"text-lightBlack space-y-2"}>
                <h4 className={"max-w-[16rem] leading-tight font-[900] text-3xl"}>Airways Accomadation</h4>
                <p className={"max-w-[19rem] text-2xl"}>We cooperate with several airlines for Umrah and Hajj </p>
                <button className={"btn-blue text-xs !py-2 px-1"}>5.0 Rating</button>
            </div>
            <div className={"space-x-24 max-h-[40px]"}>
                <StaticImage src={"../../assets/icons/garuda_indonesia.svg"} alt={""} />
                <StaticImage src={"../../assets/icons/qatar_airways.svg"} alt={""} />
                <StaticImage src={"../../assets/icons/emirates.svg"} alt={""} />
                {/*<StaticImage src={"../../assets/icons/saudi_airlines.svg"} alt={""} />*/}
            </div>
        </div>
    </section>
  );
};

export default SectionPackage;