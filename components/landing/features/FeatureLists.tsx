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
    <section className="w-full px-[170px] mt-12 md:mt-48">
      <div className="max-w-[915px] mx-auto grid grid-cols-1 md:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-4 md:space-y-8 justify-self-center  w-max bg-white">
          {features.slice(0, 4).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Middle Column */}
        <div className="space-y-8 justify-self-center my-16 w-screen md:w-auto px-8 md:px-0 md:-mt-24">
          <Card className="p-10 md:p-12 gap-4 bg-lime text-white w-full rounded-[28px]">
            <div className="">
              <Typography
                variant="h5"
                color="white"
                className="font-normal font-gilroy-bold mb-2 text-head-20"
              >
                Open Scheduling
              </Typography>
              <Typography
                color="white"
                className="mb-4 font-gilroy-medium text-[13px] font-normal"
              >
                Find available appointment slots based on the visit type and
                provider, and schedule directly without needing a MyChart
                account.
              </Typography>
            </div>
            <div className="">
              <Typography
                variant="h5"
                color="white"
                className="font-normal font-gilroy-bold mb-2 text-md"
              >
                Hello Patient
              </Typography>
              <Typography
                color="white"
                className="mb-4 font-gilroy-medium text-[13px] font-normal"
              >
                Use your smartphone or tablet for automatic check-in upon
                arrival at the clinic.
              </Typography>
            </div>
            <div className="">
              <Typography
                variant="h5"
                color="white"
                className="font-normal font-gilroy-bold mb-2 text-md"
              >
                Find Care Now
              </Typography>
              <Typography
                color="white"
                className="font-gilroy-medium text-xs font-normal"
              >
                Search for nearby urgent care or emergency departments and
                notify them of your arrival.
              </Typography>
            </div>
          </Card>
          <Card className="w-full p-10 md:p-12 border border-gray-300 rounded-[28px] shadow-none">
            <Typography
              variant="h5"
              className="mb-4 font-normal font-gilroy-bold text-md"
            >
              Upcoming Tests and Procedures
            </Typography>
            <Typography className="text-[13px] font-normal text-mediumGray ">
              Monitor and follow up on upcoming tests and procedures.
            </Typography>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8 justify-self-center w-max bg-white">
          {features.slice(4).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
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
    <div className="w-max shadow-none">
      <div className="flex items-start justify-start gap-4 p-2">
        <div className="bg-lime rounded-full w-4 h-4 flex-shrink-0"></div>
        <div className="-mt-1">
          <Typography
            variant="h6"
            className="text-secondary text-sm md:text-head-20 font-[600] font-gilroy-bold leading-6 md:mb-2 max-w-[225px]"
          >
            {title}
          </Typography>
          <Typography className="text-xs md:text-sm font-normal font-gilroy-medium text-mediumGray w-full max-w-[283px] md:max-w-[218px]">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
