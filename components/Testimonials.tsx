import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="relative mx-auto w-full max-w-custom px-8 py-72 bg-white flex justify-center items-center">
        <div className="flex items-center justify-center gap-1 absolute bottom-48 left-52">
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-8 w-[61px] h-[61px] border-white hover:z-10 focus:z-10"
            src="/avatar.jpg"
          />
          <div className="flex flex-col px-2 items-start justify-center">
            <Typography className="font-ab font-normal text-sm max-w-[405px] text-[#5B5B5B]">
              Jack menzer{" "}
            </Typography>
            <Typography className="font-ab font-normal text-xs  leading-4 text-[#828282] max-w-[200px]">
              “Great for a healthcare provider that truly values their patients”
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 absolute top-48 right-44">
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-8 w-[61px] h-[61px] border-white hover:z-10 focus:z-10"
            src="/avatar.jpg"
          />
          <div className="flex flex-col px-2 items-start justify-center">
            <Typography className="font-ab font-normal text-sm max-w-[405px] text-[#5B5B5B]">
              Jack menzer{" "}
            </Typography>
            <Typography className="font-ab font-normal text-xs  leading-4 text-[#828282] max-w-[200px]">
              “Great for a healthcare provider that truly values their patients”
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 absolute top-[350px] left-12 blur-sm">
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-8 w-[61px] h-[61px] border-white hover:z-10 focus:z-10"
            src="/avatar.jpg"
          />
          <div className="flex flex-col px-2 items-start justify-center">
            <Typography className="font-ab font-normal text-sm max-w-[405px] text-[#5B5B5B]">
              Jack menzer{" "}
            </Typography>
            <Typography className="font-ab font-normal text-xs  leading-4 text-[#828282] max-w-[200px]">
              “Great for a healthcare provider that truly values their patients”
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 absolute bottom-[350px] right-8 blur-sm">
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-8 w-[61px] h-[61px] border-white hover:z-10 focus:z-10"
            src="/avatar.jpg"
          />
          <div className="flex flex-col px-2 items-start justify-center">
            <Typography className="font-ab font-normal text-sm max-w-[405px] text-[#5B5B5B]">
              Jack menzer{" "}
            </Typography>
            <Typography className="font-ab font-normal text-xs  leading-4 text-[#828282] max-w-[200px]">
              “Great for a healthcare provider that truly values their patients”
            </Typography>
          </div>
        </div>

        <Card
          variant="gradient"
          className="bg-bluePrimary rounded-[30px] w-[483px] h-[413px]"
        >
          <CardBody className="w-full h-full p-[75px] gap-4 flex flex-col items-start justify-center">
            <div className="flex flex-col justify-start items-start">
              <Typography className="font-gilroy-bold leading-tight font-normal	text-[40px] max-w-[405px] text-white">
                Trusted by 4k+ Patients
              </Typography>
              <Typography className="font-ab font-normal text-xs leading-4 text-white max-w-[366px]">
                Discover the propounded impact of ProductName through the
                genuine stories of our patients{" "}
              </Typography>
            </div>
            <div className="flex justify-between w-full items-center mt-[38px]">
              <div className="flex items-center -space-x-8">
                <Avatar
                  variant="circular"
                  alt="user 3"
                  className="border-8 w-[86px] h-[86px] border-white hover:z-10 focus:z-10"
                  src="/avatar.jpg"
                />
                <div className="w-[86px] h-[86px] rounded-full bg-[#7199D4]"></div>
                <div className="w-[86px] h-[86px] rounded-full bg-[#7199D4]/50"></div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <p className="text-white font-gilroy-bold font-[400] text-2xl">
                  +400k
                </p>
                <span className="font-gilroy-medium text-[#7199D4]/80  font-normal capitalize text-sm">
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
