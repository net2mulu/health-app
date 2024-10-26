import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const PricingModel = () => {
  return (
    <section className="relative overflow-hidden w-full py-28  -mt-10">
      <Image
        src="/assets/money.jpg"
        alt="money"
        width={377.85}
        height={377.85}
        className="blur hidden md:block absolute -top-16 -left-32"
      />
      <Image
        src="/assets/money.jpg"
        alt="money"
        width={158}
        height={158}
        className="blur-sm md:hidden absolute -top-4 -left-16"
      />

      <Image
        src="/assets/money.jpg"
        alt="money"
        width={377.85}
        height={377.85}
        className="blur hidden md:block absolute -bottom-16 -right-40"
      />

      <Image
        src="/assets/money.jpg"
        alt="money"
        width={158}
        height={158}
        className="blur-sm md:hidden absolute -bottom-4 -right-16"
      />

      <Typography
        variant="small"
        color="blue"
        className="mb-2 text-center font-gilroy-medium text-bluePrimary text-xs md:text-sm"
      >
        Pricing Model
      </Typography>
      <Typography
        variant="h1"
        className="font-gilroy-bold mx-auto w-[266px] md:w-[497.03px] mb-2 text-secondary text-center text-head-20 md:text-head-40"
      >
        Your Health, Your <span className="text-mediumGray">Decision:</span> Get
        Started
      </Typography>

      <div className="relative mx-auto w-full gap-10 md:gap-[105.04px] py-10 md:py-8 max-w-inner flex md:flex-row flex-col justify-center items-center">
        <Card variant="gradient" className="bg-bluePrimary rounded-[30px] ">
          <CardBody className="w-full h-full px-[49px] py-[36px] md:px-[65.14px] md:py-[47.91px] gap-4 flex flex-col items-start justify-center">
            <Typography className="font-gilroy-semi-bold text-xl md:text-2xl font-light text-white">
              Custom Pricing Made Easy
            </Typography>
            <div className="space-y-4">
              <Typography className="font-ab text-[#EDF4FF] font-thin text-xs md:text-sm  max-w-[250px] tracking-wide">
                Schedule a personalized demo to experience the features and
                benefits of our service firsthand. See how ProductName can
                revolutionize your healthcare experience{" "}
              </Typography>
              <Button
                // size="lg"
                className="capitalize font-inter font-semibold text-sm bg-white text-secondary hover:bg-opacity-90 transition-colors duration-300 rounded-full px-9 py-4"
              >
                See Pricing
              </Button>
            </div>
          </CardBody>
        </Card>

        <div className="flex flex-col justify-center items-start gap-4 max-w-[250.12px]">
          <Typography className="font-gilroy-semi-bold text-2xl font-semibold">
            7 Day <span className="text-bluePrimary">Free</span> Trial
          </Typography>
          <div className="space-y-4">
            <Typography className="text-mediumGray text-sm font-normal font-ab max-w-[250.12px]  tracking-wide">
              Schedule a personalized demo to experience the features and
              benefits of our service firsthand. See how ProductName can
              revolutionize your healthcare experience{" "}
            </Typography>
            <Button
              // size="lg"
              className="capitalize font-inter font-normal text-sm bg-bluePrimary hover:bg-opacity-90 transition-colors duration-300 rounded-full px-6 md:px-9 py-2 md:py-4"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingModel;
