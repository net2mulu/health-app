import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

const Facts = () => {
  return (
    <div className="container mx-auto px-4 max-w-custom  mt-20 md:mt-[200px] ">
      <Typography
        variant="small"
        color="blue"
        className="mb-2 text-center font-gilroy-medium text-bluePrimary text-xs md:text-sm"
      >
        Healthcare Solutions
      </Typography>
      <Typography
        variant="h1"
        className="font-gilroy-bold mx-auto w-[300px] md:w-[43%] mb-2 text-secondary text-center text-head-20 md:text-head-40"
      >
        Experience <span className="text-mediumGray">Unparalleled</span>{" "}
        Healthcare Excellence
      </Typography>

      <div className="flex flex-col md:flex-row justify-center w-1/2 mx-auto md:w-full gap-4 mt-[66px] md:mt-[130px]">
        <Button className="flex items-center gap-3 px-6 bg-bluePrimary rounded-full">
          <Image
            src="/globe-icon.png"
            alt="globe"
            width={38}
            height={38}
            className="opacity-50"
          />
          <div className="flex flex-col">
            <p className="font-gilroy-semi-bold text-xl">+1.5M</p>
            <span className="font-gilroy-medium font-normal capitalize text-sm">
              user
            </span>
          </div>
        </Button>

        <Button
          variant="text"
          className="flex justify-center items-center gap-3 rounded-full"
        >
          <div className="flex items-center md:items-start flex-col">
            <p className="text-bluePrimary font-gilroy-semi-bold font-[400] text-2xl">
              +25k
            </p>
            <span className="font-gilroy-medium text-mediumGray  font-normal capitalize text-sm">
              Trusted doctors
            </span>
          </div>
        </Button>

        <Button
          variant="text"
          className="flex justify-center items-center gap-3 rounded-full"
        >
          <div className="flex flex-col items-center md:items-start">
            <p className="text-bluePrimary font-gilroy-semi-bold font-[400] text-2xl">
              4.8/5.0
            </p>
            <span className="font-gilroy-medium text-mediumGray  font-normal capitalize text-sm">
              Star
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Facts;
