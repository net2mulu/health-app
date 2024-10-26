import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Solutions = () => {
  return (
    <div className="container mx-auto px-4 max-w-custom py-8 mt-24 md:mt-96">
      {/* Typography */}
      <div className="text-start mb-20 md:mb-[152px] mx-8 md:mx-32 flex flex-col">
        <Typography
          variant="small"
          className="font-gilroy-medium text-lime text-xs md:text-sm mb-2"
        >
          Healthcare Solutions
        </Typography>
        <Typography
          variant="h1"
          className="font-gilroy-bold text-secondary text-head-20 md:text-head-40"
        >
          Comprehensive <span className="text-mediumGray ">Healthcare </span>
        </Typography>
        <div className="w-full flex justify-start text-secondary items-start mt-2 md:mt-0 md:items-center gap-4 md:gap-8">
          <Typography
            variant="h1"
            className="text-head-20 md:text-head-40 font-gilroy-bold"
          >
            Solutions
          </Typography>{" "}
          <Typography
            variant="lead"
            color="blue-gray"
            className="font-gilroy-medium md:max-w-[600px] text-xs md:text-[15px]"
          >
            Our commitment to your health is reflected in our comprehensive
            healthcare solutions, where every aspect of your{" "}
            <span className="text-green-500">wellness</span> is meticulously
            considered and addressed
          </Typography>
        </div>
      </div>

      {/* Cards */}
      <div className="relative flex flex-col md:flex-row justify-center gap-20 md:gap-72 items-center ">
        <Card className="w-[277.67px] h-[341.95px] bg-[#F6F6F6] z-10 shadow-none rounded-[22px]">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none h-[40%]"
          >
            <Image src="/mesh.png" alt="donut" fill className="pb-4" />
            <Image
              src="/donut.png"
              alt="donut"
              width={90}
              height={64}
              className="mx-auto md:ml-20 mt-9"
            />
          </CardHeader>
          <CardBody className="flex flex-col justify-center items-center w-full md:w-[90%]">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-gilroy-semi-bold font-[400] text-xl bg-gradient-to-b from-[#4E4E4E] to-[#B4B4B4] text-transparent bg-clip-text"
            >
              Specialized Care
            </Typography>
            <Typography
              variant="lead"
              className="mt-3 font-normal text-center text-mediumGray max-w-[179px] text-xs"
            >
              Meet the unique needs of individuals
            </Typography>
            <Typography
              variant="lead"
              className="mt-8 font-gilroy-medium text-center text-mediumGray text-sm"
            >
              Learn more
            </Typography>
          </CardBody>
        </Card>

        <Card className="md:absolute rounded-[27px] md:-mt-16 inset-0 mx-auto  bg-primary h-[425.58px] w-[321px] md:w-[357.64px] text-white z-20 shadow-none">
          <CardBody className="relative flex flex-col justify-center items-center h-full w-full">
            <Image
              src="/vchat.png"
              alt="voice_chat"
              width={132}
              height={8}
              className="pt-8 absolute -left-6 md:-left-10 top-3"
            />
            <Image
              src="/voice.png"
              alt="voice"
              width={256}
              height={8}
              className="my-8"
            />
            <Typography
              variant="h4"
              className="font-gilroy-semi-bold text-xl font-[400]"
            >
              Telehealth Options
            </Typography>
            <Typography className="font-gilroy-medium text-sm text-center max-w-[148px]">
              Empower yourself with Knowledge
            </Typography>
            <div className="flex items-center mb-4">
              <div className="h-2 bg-blue-500 rounded-full flex-grow">
                <div className="h-full w-1/2 bg-white rounded-full"></div>
              </div>
            </div>
            <Button className="w-36 capitalize font-inter font-semibold text-sm  bg-white text-[#468FFF] rounded-full">
              Learn More
            </Button>
            <Image
              src="/vidcall.png"
              alt="voice_chat"
              width={132}
              height={8}
              className="pt-8 absolute -right-6 md:-right-14 bottom-10"
            />
          </CardBody>
        </Card>

        <Card className="w-[277.67px] h-[341.95px]  bg-[#F6F6F6] z-10 shadow-none rounded-[22px]">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none h-[40%]"
          >
            <Image src="/mesh.png" alt="donut" fill className="pb-4" />
            <Image
              src="/bar.png"
              alt="bar"
              width={120}
              height={64}
              className="mx-auto md:ml-24 mt-9"
            />
          </CardHeader>
          <CardBody className="flex flex-col justify-center items-center w-full md:w-[110%]">
            <Typography
              variant="small"
              className="font-gilroy-semi-bold font-[400] text-xl bg-gradient-to-b from-[#4E4E4E] to-[#B4B4B4] text-transparent bg-clip-text"
            >
              Diagnostic and Testing
            </Typography>
            <Typography
              variant="lead"
              className="mt-3 font-normal text-center text-mediumGray max-w-[179px] text-xs"
            >
              Advance Diagnostic service by cutting edge technology{" "}
            </Typography>
            <Typography
              as="a"
              className="mt-3 font-gilroy-medium text-center text-mediumGray text-sm"
            >
              Learn more
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Solutions;
