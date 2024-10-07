import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="container select-none relative text-center mx-auto max-w-custom  px-8">
      

      {/* GIF Background */}
      <div className="relative h-[681.02px] overflow-hidden rounded-[35px]">
        <div className="absolute inset-0">
          <Image
            src="/background.gif" // Replace with your GIF path
            alt="Background GIF"
            fill={true}
            unoptimized={true}
            className="object-cover"
          />
        </div>
        {/* Blue Layer */}
        <div className="absolute inset-0 bg-primary/90 mix-blend-normal"></div>

        <div className="md:hidden absolute bottom-80  flex justify-between px-2 w-full">
          <Image src="/left.png" alt="left" width={150} height={100} />
          <Image src="/right.png" alt="right" width={150} height={100} />
        </div>
        <div className="absolute bottom-72 md:-bottom-72  justify-between md:px-28 w-full hidden md:flex">
          <Image src="/left.png" alt="left" width={438} height={533} />
          <Image src="/right.png" alt="right" width={438} height={533} />
        </div>
      </div>
      {/* Content Layer */}
      <div className="font-gilroy-bold absolute inset-0 flex flex-col-reverse md:flex-col  items-center justify-center">
        {/* Centered Hero Image */}
        <div className="-mb-52 md:mb-64 text-2xl md:text-5xl">
          <h1 className="max-w-xs md:max-w-xl mb-1 bg-gradient-to-r from-white via-white to-[#BDDEFF] text-transparent bg-clip-text py-2">
            {heroData.title}
          </h1>

          <Button
            size="lg"
            className="capitalize font-inter font-semibold text-sm  bg-white text-primary rounded-full"
          >
            {heroData.ctaText}
          </Button>
        </div>
        <div className="absolute bottom-80 md:-bottom-36 w-full max-w-[280px] aspect-[200/152] md:max-w-[666px] md:aspect-[666/452]">
          <Image
            src="/hero-img.png"
            alt="Hero Image"
            fill
            className="shadow-custom rounded-[8px] md:rounded-[26px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
