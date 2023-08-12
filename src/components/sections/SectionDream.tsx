import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SectionDream = () => {
  return (
    <section className={"container bg-lightSecondary"}>
      <div className={"flex flex-col lg:flex-row gap-32  py-24"}>
        {/*LEFT*/}
        <div className={"w-4/5"}>
          <StaticImage
            src={"../../assets/images/dream_image.png"}
            alt={"Sultan Aceh"}
          />
        </div>
        {/*RIGHT*/}
        <div className={"space-y-6 w-full"}>
          <h1 className={"max-w-xl font-bold text-lightBlack"}>A Wonderful Agency To Fulfill your Dreams</h1>
          <p className={"font-semibold text-lightBlack max-w-md"}>
            The Hajj and Umrah pilgrimages are smooth, the heart is clean. we
            have been trusted since 2006 and have obtained a license from SAUDI
            ARABIA to become this travel agency.
          </p>
          <ul className={"space-y-2"}>
            <li>
              Flight Jakarta Saudi - Saudi Jakarta
            </li>
            <li>Tickets are included in the cost</li>
            <li>Comfortable hotel with a rating of 4</li>
            <li>We cover the Visa Fee and it's Included</li>
          </ul>
          <div className={"flex gap-4"}>
            <button className={"btn-orange text-sm"}>Learn more</button>
            <button className={"btn-orange-outline text-primary text-sm "}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDream;