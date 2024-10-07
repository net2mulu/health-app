import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full py-20 md:py-40 mt-[162px] relative overflow-hidden bg-bluePrimary">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pattern.jpg"
          alt="background pattern"
          fill
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-bluePrimary bg-opacity-90"></div>
      </div>
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center w-full max-w-custom px-4 md:px-8">
        <h1 className="font-ab font-[40px]  max-w-sm  md:max-w-2xl mb-6 text-3xl text-head-20 md:text-head-40  text-white text-center leading-tight">
          Navigating Wellness through ProductName
        </h1>
        <Button
          size="lg"
          className="capitalize font-inter font-semibold text-sm bg-white text-bluePrimary hover:bg-opacity-90 transition-colors duration-300 rounded-full px-6 md:px-8 py-2 md:py-3"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
