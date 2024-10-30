import { Typography } from "@material-tailwind/react";
import React from "react";

const Heading = ({
  title,
  description,
  comp,
}: {
  title: string;
  description: string;
  comp?: React.ReactNode;
}) => {
  return (
    <div className="relative w-full h-[195.25px] bg-[#F7F7F7] flex flex-col items-center justify-center rounded-[11px]">
      {comp}
      <Typography className="text-[#1E1E1E] font-gilroy-semi-bold text-2xl font-normal my-0">
        {title}
      </Typography>
      <Typography className="!text-mediumGray text-head-15 font-gilroy-medium -mt-1">
        {description}
      </Typography>
    </div>
  );
};

export default Heading;
