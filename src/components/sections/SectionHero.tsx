import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Typography from "components/ui/Typography";
import { Button } from "components/ui/Button";

const SectionHero = () => {
  return (
    <section className={"bg-gradient-yellow"}>
      <div className={"container"}>
        <div className={"grid grid-cols-1 lg:grid-cols-2 py-24  items-center"}>
          {/*LEFT*/}
          <div className={""}>
            <Button
              variant={"secondary"}
              size={"sm"}
              text={"s24"}
              className={"rounded-full mb-8"}
            >
              No.1 in Indonesia
            </Button>
            {/*<button className={"btn-blue my-6 text-xl"}>No.1 in Indonesia</button>*/}
            <div className={"space-y-6"}>
              <Typography variant={"s54"} as={"h1"}>
                Make it easy for your Umrah worship with Al Nasr Travel
              </Typography>
              <Typography variant={"s20"} as={"p"}>
                Facilitate your Umrah pilgrimage with us, we already have
                hundreds of thousands of customers, you can go for Umrah to
                Mecca and Medina
              </Typography>
              <Button>Contact Us</Button>
            </div>
          </div>

          {/*RIGHT*/}
          <div className={"w-[500px] mx-auto"}>
            <StaticImage
              src={"../../images/image-hero.jpg"}
              alt={"Dream Image"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
