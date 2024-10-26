import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="w-4/5 md:w-full py-20 max-w-inner flex flex-col justify-center items-start mx-auto">
      <Typography
        variant="small"
        color="blue"
        className="mb-2 text-center font-gilroy-medium text-bluePrimary text-xs md:text-sm"
      >
        FAQ{" "}
      </Typography>
      <Typography
        variant="h1"
        className="font-gilroy-bold  w-[300px] md:w-[419px] mb-2 text-secondary text-start text-head-20 md:text-head-40"
      >
        Frequently <span className="text-mediumGray">asked</span> question
      </Typography>
      <div className="relative w-full flex flex-col gap-2 md:gap-9 justify-center items-center mt-14">
        {[1, 2, 3, 4].map((i) => (
          <Accordion
            key={i}
            open={open === i}
            icon={
              open ? (
                <ChevronUp className="w-4 md:w-16" />
              ) : (
                <ChevronDown className="w-4 md:w-16" />
              )
            }
          >
            <AccordionHeader
              className="font-gilroy-medium font-normal text-sm md:text-xl"
              onClick={() => handleOpen(i)}
            >
              How to reset my password ?{" "}
            </AccordionHeader>
            <AccordionBody className="text-xs md:text-sm">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
