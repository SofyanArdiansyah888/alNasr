import React from "react";
import PackageCard from "../PackageCard";
import { StaticImage } from "gatsby-plugin-image";
import { EmiratesIcon, GarudaIndonesiaIcon, QatarAirwaysIcon } from "../icons";
import Typography from "components/ui/Typography";

const SectionPackage = () => {
  return (
    <section className={"container py-24 "}>
      <Typography variant={"s54"} className={"text-center mx-auto max-w-2xl"}>
        Al Nasr Special Umrah and Hajj Packages
      </Typography>

        <Typography variant={"s24"} className={"mx-auto text-center mt-4 max-w-[40rem]"}>
            Choose your package according to your needs, guaranteed cheap and
            complete
        </Typography>

      <div className={"grid grid-cols-1 lg:grid-cols-3 mt-24 gap-16"}>
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
      <div className={"flex flex-row mt-24 gap-24 items-center"}>
        <div className={"text-lightBlack space-y-2"}>
          <h4 className={"max-w-[16rem] leading-tight font-[900] text-3xl"}>
            Airways Accomadation
          </h4>
          <p className={"max-w-[19rem] text-2xl"}>
            We cooperate with several airlines for Umrah and Hajj{" "}
          </p>
          <button className={"btn-blue text-xs !py-2 px-1"}>5.0 Rating</button>
        </div>
        <div className={"space-x-24 max-h-[40px]"}>
          <GarudaIndonesiaIcon />
          <QatarAirwaysIcon />
          <EmiratesIcon />
          {/*<StaticImage src={"../../assets/icons/saudi_airlines.svg"} alt={""} />*/}
        </div>
      </div>
    </section>
  );
};

export default SectionPackage;
