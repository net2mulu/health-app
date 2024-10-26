import React from "react";
import { Card, Typography } from "@material-tailwind/react";

export default function FeatureLists() {
  const features = [
    {
      title: "After Visit Summary",
      description:
        "Review the details of your previous appointments or hospital stays.",
    },
    {
      title: "See Clinical Notes",
      description: "Access notes recorded and shared by your doctor.",
    },
    {
      title: "Appointment Scheduling",
      description:
        "Book an appointment yourself or request the clinic to contact you. View details of upcoming appointments, including instructions and driving directions, or cancel if necessary.",
    },
    {
      title: "Video Visits",
      description:
        "Meet with a provider via video for care from the comfort of your home or work.",
    },
    {
      title: "Favorite Appointments",
      description: "Create shortcuts for frequently scheduled appointments.",
    },
    {
      title: "Fast Pass Appointments and Wait List Updates",
      description:
        "Add yourself to the waitlist to be notified if an earlier appointment becomes available.",
    },
    {
      title: "eCheck-In",
      description:
        "Complete the check-in process from home to save time at the clinic. Pay visit copays, verify medical and insurance information, respond to questionnaires, and sign documents electronically.",
    },
    {
      title: "Register for My Delivery",
      description:
        "Create a hospital stay delivery by registering with your chosen hospital.",
    },
  ];

  return (
    <section className="w-full md:px-[170px] mt-12 md:mt-48">
      <div className="w-full max-w-[915px] mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="space-y-4 md:space-y-8 md:mt-11 justify-self-center md:justify-self-start w-max">
          {features.slice(0, 4).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="space-y-10  my-16 w-screen md:w-[280px] px-8 md:px-0 md:-mt-20">
          <Card className="p-10 gap-6 bg-lime text-white w-full rounded-[28px]">
            <div className="">
              <Typography
                color="white"
                className="font-gilroy-bold font-bold mb-2 text-head-16 md:text-head-20"
              >
                Open Scheduling
              </Typography>
              <Typography
                color="white"
                className="text-head-15 font-normal font-gilroy-medium leading-5"
              >
                Find available appointment slots based on the visit type and
                provider, and schedule directly without needing a MyChart
                account.
              </Typography>
            </div>
            <div className="">
              <Typography
                color="white"
                className="font-gilroy-bold font-bold mb-2 text-head-16 md:text-head-20"
              >
                Hello Patient
              </Typography>
              <Typography
                color="white"
                className="text-head-15 font-normal font-gilroy-medium leading-5"
              >
                Use your smartphone or tablet for automatic check-in upon
                arrival at the clinic.
              </Typography>
            </div>
            <div className="">
              <Typography
                color="white"
                className="font-gilroy-bold font-bold mb-2 text-head-16 md:text-head-20"
              >
                Find Care Now
              </Typography>
              <Typography
                color="white"
                className="text-head-15 font-normal font-gilroy-medium leading-5"
              >
                Search for nearby urgent care or emergency departments and
                notify them of your arrival.
              </Typography>
            </div>
          </Card>
          <Card className="w-full p-10 space-y-6 border border-gray-300 rounded-[28px] shadow-none">
            <Typography className="text-secondary  font-gilroy-bold font-bold mb-2 text-head-16 md:text-head-20 leading-6 ">
              Upcoming Tests and Procedures
            </Typography>
            <Typography className="text-mediumGray text-head-15 font-normal font-gilroy-medium leading-5">
              Monitor and follow up on upcoming tests and procedures.
            </Typography>
          </Card>
        </div>

        <div className="space-y-8 justify-self-center md:justify-self-start w-max md:w-full">
          {features.slice(4).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        {/* Left Column */}
        {/* <div className="space-y-4 md:space-y-8   w-max">
          {features.slice(0, 4).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div> */}

        {/* Middle Column */}
        {/* */}

        {/* Right Column */}
        {/* <div className="space-y-8  w-full">
          {features.slice(4).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full shadow-none">
      <div className="flex items-start justify-start gap-4 p-2">
        <div className="bg-lime rounded-full w-4 h-4 flex-shrink-0"></div>
        <div className="-mt-1">
          <Typography className="text-secondary text-sm md:text-head-20 font-normal font-gilroy-semi-bold leading-6 md:mb-2">
            {title}
          </Typography>
          <Typography className="text-xs md:text-head-15 font-normal font-gilroy-medium text-mediumGray w-full max-w-[283px] md:max-w-[218px]">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
