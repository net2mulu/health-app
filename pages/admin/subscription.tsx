import Heading from "@/components/admin/UI/Heading";
import Table from "@/components/admin/UI/Table";
import { Card, CardBody, Chip } from "@material-tailwind/react";
import { CircleDot } from "lucide-react";
import React from "react";

const subscription = () => {
  type Applications = Record<string, React.ReactNode>;

  const subscriptions: Applications[] = [
    {
      Name: (
        <Chip
          className="capitalize rounded-full bg-[#E4FFDE] text-[#5DBA47] !px-6 p-3 w-max"
          value="Basic"
        />
      ),
      status: (
        <div className="flex gap-1 items-center justify-center">
          <CircleDot size={16} className="text-lime" />
          <span>online</span>
        </div>
      ),
      "NUMBER OF PATINET": "2000",
    },
    {
      Name: (
        <Chip
          className="capitalize rounded-full bg-[#E4FFDE] text-[#5DBA47] !px-6 p-3 w-max"
          value="Basic"
        />
      ),
      status: (
        <div className="flex gap-1 items-center justify-center">
          <CircleDot size={16} className="text-red-400" />
          <span>offline</span>
        </div>
      ),
      "NUMBER OF PATINET": "5000",
    },
  ];
  return (
    <>
      <Heading
        title="Subscription Plan"
        description="Here's the list of subscription"
      />
      <Card className="shadow-none  w-full">
        <CardBody className="w-full px-0">
          <Table data={subscriptions} />
        </CardBody>
      </Card>
    </>
  );
};

export default subscription;
