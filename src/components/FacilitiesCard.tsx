import React from "react";
import {
  ConselingIcon,
  EatIcon,
  HealthIcon,
  HostelIcon,
  MembershipIcon,
  SafetyIcon,
  VaccineIcon,
  VehicleIcon,
} from "components/icons";
import Typography from "components/ui/Typography";

const FacilitiesCard = ({
  title,
  subtitle,
  icon,
}: {
  title?: string | null;
  subtitle?: string | null;
  icon?: string | null;
}) => {
  return (
    <div className={"custom-shadow items-center lg:items-start rounded-md p-4 flex gap-2 bg-white"}>
      <div className={"w-16"}>
        {icon === "safety" && <SafetyIcon />}
        {icon === "conseling" && <ConselingIcon />}
        {icon === "vehicle" && <VehicleIcon />}
        {icon === "health" && <HealthIcon />}
        {icon === "hostel" && <HostelIcon />}
        {icon === "food" && <EatIcon />}
        {icon === "membership" && <MembershipIcon />}
        {icon === "vaccine" && <VaccineIcon />}
      </div>
      <div className={"space-y-1"}>
        <Typography as={"h6"} variant={"s20"} color={"light-dark"}>
          {title}
        </Typography>
        <Typography as={"p"} variant={"s14"} color={"light-dark"}>
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default FacilitiesCard;
