import { useState } from "react";
import { TabData } from "@/lib/data";
import {
  Tabs,
  TabsHeader,
  Tab,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(TabData[0].value);
  const [open, setOpen] = useState(false);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setOpen((prev) => !prev);
  };

  return (
    <section className="relative w-full md:mb-4 md:mt-48 ">
      {/* mobile links */}
      <Accordion
        className={`md:hidden w-[84%] px-6 mx-auto rounded-full mb-6 transition-all duration-300 ${
          open ? "bg-[#F8F8F8F8] py-4 rounded-[13px]" : "bg-primary"
        }`}
        open={open}
        icon={
          open ? (
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4168 12.4694L11.0002 6.96936L4.5835 12.4694"
                stroke="#868686"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.4168 16.1361L11.0002 10.6361L4.5835 16.1361"
                stroke="#868686"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4168 10.8193L11.0002 16.3193L4.5835 10.8193"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.4168 7.15259L11.0002 12.6526L4.5835 7.15259"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )
        }
      >
        <AccordionHeader
          className={`border-none text-sm font-normal text-secondary font-gilroy-bold ${
            !open && "!text-white"
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          {activeTab}
        </AccordionHeader>
        <AccordionBody className="-mt-6 z-10">
          <ul className="text-sm text-secondary font-normal font-gilroy-bold cursor-pointer">
            {TabData.map(
              (tab) =>
                tab.value !== activeTab && (
                  <li
                    key={tab.value}
                    className="py-2 hover:underline"
                    onClick={() => handleTabChange(tab.value)}
                  >
                    {tab.label}
                  </li>
                )
            )}
          </ul>
        </AccordionBody>
      </Accordion>
      {/* Desktop Tab */}
      <Tabs value={activeTab} className="hidden md:block max-w-[938px] mx-auto">
        <TabsHeader
          className="bg-[#F8F8F8]  p-0 rounded-full mb-24"
          indicatorProps={{
            className: "bg-primary shadow-md  rounded-full",
          }}
        >
          {TabData.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`${
                activeTab === value ? "text-white" : "text-mediumGray"
              }  font-gilroy-bold font-normal text-sm py-6 px-4 rounded-full transition-colors duration-300`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      {/* Body */}
      <div className="px-8 md:px-0 ">
        {TabData.map(({ value, title, imageSrc }) => (
          <div
            className={`${value === activeTab ? "block" : "hidden"} w-full`}
            key={value}
          >
            <div className="w-full max-w-[916px] mx-auto space-y-4 flex flex-col items-start">
              <h2 className="text-secondary text-head-15 md:text-head-40 font-normal font-gilroy-bold md:mb-4">
                {title.split(" ")[0]}{" "}
                <span className="text-mediumGray">
                  {title.split(" ").slice(1).join(" ")}
                </span>
              </h2>

              <div className="relative h-[146px] md:h-[392px] w-full">
                <Image
                  src={imageSrc}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[13px] md:rounded-[29px]  shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureTabs;
