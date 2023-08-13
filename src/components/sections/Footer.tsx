import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {LogoIcon} from "../icons";

const Footer = () => {
  return (
    <footer className={"container bg-secondary pt-12 pb-6"}>
      <div className={"grid grid-cols-1 lg:grid-cols-5 gap-12"}>
        <div className={" max-h-fit"}>
          <div className={"flex flex-row py-3 px-6 bg-white rounded-md"}>
            <LogoIcon className={"w-full"} />
            <div className={"space-y-0 text-secondary"}>
              <h6 className={"!text-sm"}>Al Hajj</h6>
              <h6 className={"!text-sm"}>Umrah</h6>
            </div>
          </div>
          <p className={"text-sm text-white pt-4"}>Comfortable and Quiet Worship, Our Service No. 1 in Indonesia</p>
        </div>
        <FooterLink />
        <FooterLink />
        <FooterLink />
        <FooterLink />
      </div>
      <hr className={"my-6"} />
      <div className={"flex justify-between text-white items-center"}>
        <p className={"text-xs"}>
          Copyright © 2006 - 2023 Al Nasr Travel | All Reserverd
        </p>
        <div className={"flex gap-4"}></div>
      </div>
    </footer>
  );
};

const FooterLink = () => (
  <div className={"text-white"}>
    <p className={"text-xl font-semibold"}>Quick Link</p>
    <ul className={"space-y-2 mt-4 text-md"}>
      <li>About Us</li>
      <li>Flight Accommodation</li>
      <li>Facilities</li>
      <li>Gallery</li>
    </ul>
  </div>
);

export default Footer;
