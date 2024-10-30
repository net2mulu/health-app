import { useState } from "react";
import Heading from "@/components/admin/UI/Heading";
import PaymentCard from "@/components/admin/UI/PaymentCard";
import { PricingPlan } from "@/lib/types";
import {
  Button,
  Dialog,
  DialogBody,
  Chip,
  IconButton,
} from "@material-tailwind/react";
import PaymentPlanForm from "@/components/admin/plan/PaymentPlanForm";

export default function Plan() {
  const [open, setOpen] = useState(false);

  const pricingData: PricingPlan[] = [
    {
      name: "Name",
      status: (
        <Chip
          className="capitalize text-[8.2px] rounded-full bg-[#E4FFDE] text-[#5DBA47] p-2 px-4 w-max"
          value="Basic"
        />
      ),
      description:
        "Description: Includes 1 clinician & 50 patients +$250/mo per clinician + $40/mo per 50 patients",
      price: 290,
      interval: "Month",
      maxPatients: 1000,
      additionalPatientPrice: 40,
    },
    {
      name: "Standard",
      status: (
        <Chip
          className="capitalize  text-[8.2px] rounded-full bg-[#FFF7EC] text-[#FFBB0B] p-2 px-4 w-max"
          value="Premium"
        />
      ),
      description:
        "Description: Includes 1 clinician & 50 patients +$250/mo per clinician + $40/mo per 50 patients",
      price: 290,
      interval: "Month",
      maxPatients: 1000,
      additionalPatientPrice: 40,
    },
  ];

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog size="lg" className="p-0 " open={open} handler={handleOpen}>
        <DialogBody className="relative">
          <IconButton
            className="absolute right-8 top-6 z-10"
            variant="text"
            size="sm"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                fill="#0D447A"
              />
            </svg>{" "}
          </IconButton>
          <PaymentPlanForm />
        </DialogBody>
      </Dialog>

      <Heading
        title="Payment Plans"
        description="Here's the list of applications"
        comp={
          <div className="absolute top-0 right-0">
            <Button
              onClick={handleOpen}
              className="flex rounded-full m-6 bg-primary font-gilroy-semi-bold capitalize items-center px-4 gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.05469 15.0294C12.1968 15.0294 15.5547 11.6715 15.5547 7.52942C15.5547 3.38728 12.1968 0.0294189 8.05469 0.0294189C3.91255 0.0294189 0.554688 3.38728 0.554688 7.52942C0.554688 11.6715 3.91255 15.0294 8.05469 15.0294ZM8.61719 5.27942C8.61719 4.96876 8.36534 4.71692 8.05469 4.71692C7.74404 4.71692 7.49219 4.96876 7.49219 5.27942V6.96692H5.80469C5.49403 6.96692 5.24219 7.21877 5.24219 7.52942C5.24219 7.84007 5.49403 8.09192 5.80469 8.09192H7.49219V9.77942C7.49219 10.0901 7.74404 10.3419 8.05469 10.3419C8.36534 10.3419 8.61719 10.0901 8.61719 9.77942V8.09192H10.3047C10.6153 8.09192 10.8672 7.84007 10.8672 7.52942C10.8672 7.21877 10.6153 6.96692 10.3047 6.96692H8.61719V5.27942Z"
                  fill="white"
                />
              </svg>
              New Plan
            </Button>
          </div>
        }
      />
      <div className="container gap-8  mt-12">
        {pricingData.map((plan, index) => (
          <PaymentCard key={index} {...plan} />
        ))}
      </div>
    </>
  );
}
