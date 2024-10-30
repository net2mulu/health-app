import Heading from "@/components/admin/UI/Heading";
import Table from "@/components/admin/UI/Table";
import { Card, CardBody, Chip } from "@material-tailwind/react";
import { AlignLeft } from "lucide-react";

export default function facilities() {
  type Applications = Record<string, React.ReactNode>;

  const applications: Applications[] = [
    {
      Name: (
        <div className="flex gap-2 items-center justify-start">
          <div className="w-[36.48px] h-[36.48px] bg-gray-400 rounded-full"></div>
          <p>Test facility</p>
        </div>
      ),
      Admin: "Daniel Jhon",
      Email: "danieljohn@gmail.com",
      Paitents: "123",
      Plan: (
        <Chip
          className="capitalize rounded-full bg-white text-mediumGray border border-mediumGray !px-6 p-3 w-max"
          value="Pending"
        />
      ),
      View: <AlignLeft className="text-[#787878]" />,
    },
    {
      Name: (
        <div className="flex gap-2 items-center justify-start">
          <div className="w-[36.48px] h-[36.48px] bg-gray-400 rounded-full"></div>
          <p>Test facility</p>
        </div>
      ),
      Admin: "Daniel Jhon",
      Email: "danieljohn@gmail.com",
      Paitents: "123",
      Plan: (
        <Chip
          className="capitalize rounded-full bg-white text-mediumGray border border-mediumGray !px-6 p-3 w-max"
          value="Pending"
        />
      ),
      View: <AlignLeft className="text-[#787878]" />,
    },
  ];

  return (
    <>
      <Heading
        title="All Applications"
        description="Here's the list of applications"
      />
      <Card className="shadow-none  w-full">
        <CardBody className="w-full px-0">
          <Table data={applications} />
        </CardBody>
      </Card>
    </>
  );
}