import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="relative mx-auto w-full max-w-custom px-8 py-40 md:py-72  flex justify-center items-center overflow-hidden">
        <div className="flex items-center justify-center md:gap-1 absolute bottom-24 md:bottom-48 left-4 md:left-52">
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-8 w-[50px] h-[50px] md:w-[61px] md:h-[61px] border-white hover:z-10 focus:z-10"
            src="/assets/avatar.jpg"
          />
          <div className="flex flex-col px-2 items-start justify-center">
            <Typography className="font-ab font-normal text-xs md:text-sm max-w-[405px] text-[#5B5B5B]">
              Jack menzer{" "}
            </Typography>
            <Typography className="font-ab font-normal text-[7px] md:text-xs md:leading-4 text-[#828282] max-w-[150px] md:max-w-[200px]">
              “Great for a healthcare provider that truly values their patients”
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center md:gap-1 absolute top-24 md:top-48 left-52 md:-right-52">
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-8 w-[50px] h-[50px] md:w-[61px] md:h-[61px] border-white hover:z-10 focus:z-10"
            src="/assets/avatar.jpg"
          />
          <div className="flex flex-col px-2 items-start justify-center">
            <Typography className="font-ab font-normal text-xs md:text-sm max-w-[405px] text-[#5B5B5B]">
              Jack menzer{" "}
            </Typography>
            <Typography className="font-ab font-normal text-[7px] md:text-xs md:leading-4 text-[#828282] md:max-w-[200px]">
              “Great for a healthcare provider that truly values their patients”
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 absolute top-[200px] md:top-[350px] -left-20 md:left-12 blur-sm">
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-8 w-[61px] h-[61px] border-white hover:z-10 focus:z-10"
            src="/assets/avatar.jpg"
          />
          <div className="flex flex-col px-2 items-start justify-center">
            <Typography className="font-ab font-normal text-xs md:text-sm max-w-[405px] text-[#5B5B5B]">
              Jack menzer{" "}
            </Typography>
            <Typography className="font-ab font-normal text-[7px] md:text-xs  leading-4 text-[#828282] max-w-[200px]">
              “Great for a healthcare provider that truly values their patients”
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center md:gap-1 absolute bottom-[180px] md:bottom-[350px] -right-48 md:right-8 blur-sm">
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-8 w-[50px] h-[50px] md:w-[61px] md:h-[61px] border-white hover:z-10 focus:z-10"
            src="/assets/avatar.jpg"
          />
          <div className="flex flex-col px-2 items-start justify-center">
            <Typography className="font-ab font-normal text-xs md:text-sm max-w-[405px] text-[#5B5B5B]">
              Jack menzer{" "}
            </Typography>
            <Typography className="font-ab font-normal text-[7px] md:text-xs  leading-4 text-[#828282] max-w-[200px]">
              “Great for a healthcare provider that truly values their patients”
            </Typography>
          </div>
        </div>

        <Card
          variant="gradient"
          className="bg-bluePrimary rounded-[15px] md:rounded-[30px] w-[236px] md:w-[483px] h-[201px] md:h-[413px]"
        >
          <CardBody className="w-full h-full p-[36px] md:p-[75px] gap-4 flex flex-col items-start justify-center">
            <div className="flex flex-col gap-2 justify-start items-start">
              <Typography className="font-gilroy-bold leading-none md:leading-tight font-normal text-[20px]	md:text-[40px] max-w-[198px] md:max-w-[405px] text-white">
                Trusted by 4k+ Patients
              </Typography>
              <Typography className="font-ab font-[100] text-[7px] md:text-xs md:leading-4 text-white max-w-[179px] md:max-w-[366px]">
                Discover the propounded impact of ProductName through the
                genuine stories of our patients{" "}
              </Typography>
            </div>
            <div className="flex justify-between w-full items-center md:mt-[38px]">
              <div className="flex items-center -space-x-4 md:-space-x-8">
                <Avatar
                  variant="circular"
                  alt="user 3"
                  className="border-4 md:border-8 w-[33px] h-[33px] md:w-[86px] md:h-[86px] border-white hover:z-10 focus:z-10"
                  src="/assets/avatar.jpg"
                />
                <div className=" w-[33px] h-[33px] md:w-[86px] md:h-[86px] rounded-full bg-[#7199D4]"></div>
                <div className=" w-[33px] h-[33px] md:w-[86px] md:h-[86px] rounded-full bg-[#7199D4]/50"></div>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-white font-gilroy-medium md:font-gilroy-bold font-[400] text-lg md:text-2xl">
                  +400k
                </p>
                <span className="font-gilroy-medium text-[#7199D4]/80  font-normal capitalize text-[7px] md:text-sm">
                  Patients
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
