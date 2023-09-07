import React from "react";
import { Button } from "components/ui/Button";
import { LogoIcon } from "components/icons";

const Navbar = () => {
  return (
    <nav
      className={
        "hidden lg:flex flex-col lg:flex-row gap-8 lg:gap-0 container  justify-between items-center py-4"
      }
    >
      <LogoIcon />

      <div>
        <ul className={"flex flex-col lg:flex-row gap-8 text-lightBlack "}>
          <li className={"text-lightBlack hover:text-primary cursor-pointer"}>
            Home
          </li>
          <li className={"text-lightBlack hover:text-primary cursor-pointer"}>
            About Us
          </li>
          <li className={"text-lightBlack hover:text-primary cursor-pointer"}>
            Package
          </li>
          <li className={"text-lightBlack hover:text-primary cursor-pointer"}>
            Facilities
          </li>
          <li className={"text-lightBlack hover:text-primary cursor-pointer"}>
            Gallery
          </li>
        </ul>
      </div>

      <Button variant={"primary"} size={"sm"} text={"s20"}>
        Contact Us
      </Button>
    </nav>
  );
};

export default Navbar;
