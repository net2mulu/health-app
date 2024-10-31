import React from "react";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Pencil } from "lucide-react";
import { PricingPlan } from "@/lib/types";

const PaymentCard: React.FC<PricingPlan> = ({
  name,
  status,
  description,
  price,
  interval,
  maxPatients,
  additionalPatientPrice,
}) => {
  return (
    <div className="flex gap-6 justify-center w-full items-center  mb-10">
      <div className="mb-2 max-w-[200px]">
        <div className="flex gap-4 items-center justify-start">
          <Typography
            variant="h6"
            className="font-gilroy-semi-bold text-[#1E1E1E]"
          >
            {name}
          </Typography>
          {status}
        </div>
        <Typography
          variant="small"
          className="font-gilroy-medium text-head-13 text-ellipsis font-normal text-[#787878] mt-2"
        >
          {description}
        </Typography>
      </div>
      <Card className="flex-1 shadow-none border border-gray-200 rounded-[9px] pb-8 pt-4">
        <CardBody className="relative flex flex-col md:flex-row justify-between items-start md:items-center p-4">
          <div className="flex flex-col justify-around md:flex-row gap-8 w-full">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Price : <span className="text-lime">${price}</span>
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Interval : <span className="text-lime">{interval}</span>
              </Typography>
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Patients
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Max Patients : <span className="text-lime">{maxPatients}</span>
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Additional 50 Patients Price:{" "}
                <span className="text-lime">${additionalPatientPrice}</span>
              </Typography>
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Provider
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Max Patients : <span className="text-lime">{maxPatients}</span>
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Additional 50 Patients Price:{" "}
                <span className="text-lime">${additionalPatientPrice}</span>
              </Typography>
            </div>
          </div>
          <IconButton className="bg-lime absolute right-8 top-1 rounded-full h-8 w-8 min-w-[32px]">
            <Pencil className="h-3 text-white w-3" />
          </IconButton>
        </CardBody>
      </Card>
    </div>
  );
};

export default PaymentCard;
