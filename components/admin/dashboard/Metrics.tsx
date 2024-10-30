import { Typography, Card, CardBody } from "@material-tailwind/react";

const Metrics = () => {
  return (
    <div className="flex gap-6 mb-6 mt-12 w-full h-[195.25px]">
      <Card className="bg-primary text-md text-white h-full w-[378.92px] xl:w-3/5 rounded-[21px] shadow-none ">
        <CardBody className="flex items-center justify-center gap-4 h-full">
          <Typography
            variant="h1"
            className="font-gilroy-semi-bold text-[96px]"
          >
            25
          </Typography>
          <Typography className="font-gilroy-semi-bold text-head-20">
            Facilities
          </Typography>
        </CardBody>
      </Card>

      <Card className="shadow-none border rounded-[21px] h-full w-[247.51px] xl:w-2/5 border-[#C7C7C7] ">
        <CardBody className="flex flex-col items-center justify-center h-full">
          <Typography
            variant="h1"
            className=" text-black font-gilroy-semi-bold font-normal text-[96px]"
          >
            11
          </Typography>
          <Typography className="-mt-8 font-gilroy-semi-bold  font-normal text-[#858585] text-head-20">
            New Messages
          </Typography>
        </CardBody>
      </Card>
      <div className="flex flex-col gap-6 items-center justify-center">
        <Card className="shadow-none border rounded-[21px] border-[#C7C7C7] min-w-[190.16px] xl:w-1/54">
          <CardBody className="flex justify-center items-center">
            <Typography
              variant="h6"
              className="font-gilroy-bold mb-2 text-[#1e1e1e]"
            >
              Today
            </Typography>
          </CardBody>
        </Card>
        <Card className="shadow-none border rounded-[21px] border-[#C7C7C7] min-w-[190.16px] xl:w-1/54">
          <CardBody className="flex gap-2 text-sm justify-center items-center  text-mediumGray">
            <div className="w-3 h-3 bg-lime rounded-full"></div>
            <Typography className="font-gilroy-bold">
              {new Date().getMonth() +
                1 +
                "/" +
                new Date().getDate() +
                "/" +
                new Date().getFullYear()}
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Metrics;
