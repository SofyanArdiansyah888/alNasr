import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Typography from "components/ui/Typography";
import FlightIcon from "components/icons/FlightIcon";
import TicketIcon from "components/icons/TicketIcon";
import HostelIcon from "components/icons/HostelIcon";
import { Button } from "components/ui/Button";

const SectionDream = () => {
  return (
    <section className={" bg-lightSecondary"}>
      <div className={"flex flex-col lg:flex-row gap-32  py-24 container"}>
        {/*LEFT*/}
        <div className={"w-4/5"}>
          <StaticImage
            src={"../../images/dream_image.png"}
            alt={"Sultan Aceh"}
          />
        </div>
        {/*RIGHT*/}
        <div className={"space-y-8 w-full"}>
          <Typography variant={"s54"}>
            A Wonderful Agency To Fulfill your Dreams
          </Typography>

          <Typography variant={"s24"} as={"p"}>
            The Hajj and Umrah pilgrimages are smooth, the heart is clean. we
            have been trusted since 2006 and have obtained a license from SAUDI
            ARABIA to become this travel agency.
          </Typography>
          <ul className={"space-y-4 "}>
            <li>
              <Typography variant={"s24"} className={"flex gap-4"}>
                <FlightIcon />
                Flight Jakarta Saudi - Saudi Jakarta
              </Typography>
            </li>
            <li>
              <Typography variant={"s24"} className={"flex gap-4"}>
                <TicketIcon />
                Tickets are included in the cost
              </Typography>
            </li>
            <li>
              <Typography variant={"s24"} className={"flex gap-4"}>
                <HostelIcon />
                Comfortable hotel with a rating of 4
              </Typography>
            </li>
            <li>
              <Typography variant={"s24"} className={"flex gap-4"}>
                <HostelIcon />
                We cover the Visa Fee and it's Included
              </Typography>
            </li>
          </ul>
          <div className={"flex gap-12"}>
            <Button>Learn More</Button>
            <Button variant={"outline"}>Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDream;
