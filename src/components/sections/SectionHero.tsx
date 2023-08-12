import React from "react";
import {StaticImage} from "gatsby-plugin-image";

const SectionHero = () => {
  return (
    <section className={"container bg-gradient-yellow"}>
      <div className={"grid grid-cols-1 lg:grid-cols-2 py-24 gap-4"}>
        {/*LEFT*/}
        <div>
          <button className={"btn-blue my-8"}>No.1 in Indonesia</button>
          <div className={"space-y-6"}>
            <h1 className={"max-w-md font-bold text-lightBlack"}>
              Make it easy for your Umrah worship with Al Nasr Travel
            </h1>
            <p className={"font-semibold text-lightBlack max-w-md"}>
              Facilitate your Umrah pilgrimage with us, we already have hundreds
              of thousands of customers, you can go for Umrah to Mecca and
              Medina
            </p>
            <button className={"btn-orange text-sm"}>Contact Us</button>
          </div>
        </div>

        {/*RIGHT*/}
        <div>
          <StaticImage src={"../../assets/icons/image_hero.svg"}  alt={"Dream Image"}/>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
