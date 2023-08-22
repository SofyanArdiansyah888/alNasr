import {
  EmiratesIcon,
  GarudaIndonesiaIcon,
  QatarAirwaysIcon,
} from "components/icons";
import React from "react";


const SectionCtaFlight = () => {
  return (
    <section className={"container pb-24 "}>
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
        </div>
      </div>
    </section>
  );
};

export default SectionCtaFlight;
