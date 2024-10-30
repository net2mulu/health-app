import Metrics from "@/components/admin/dashboard/Metrics";
import Table from "@/components/admin/UI/Table";
import { Typography, Card, CardBody, Chip } from "@material-tailwind/react";
import { AlignLeft } from "lucide-react";

export default function Dashboard() {
  type Project = Record<string, React.ReactNode>;

  const projects: Project[] = [
    {
      Name: (
        <div className="flex gap-2 items-center justify-start">
          <div className="w-[36.48px] h-[36.48px] bg-gray-400 rounded-full"></div>
          <p>Test facility</p>
        </div>
      ),
      Date: "7/22/2024",
      Plan: (
        <Chip
          className="capitalize rounded-full bg-[#E4FFDE] text-[#5DBA47] !px-6 p-3 w-max"
          value="Basic"
        />
      ),
      View: <AlignLeft className="text-[#787878]" />,
    },
    {
      Name: (
        <div className="flex gap-2 items-center justify-start">
          <div className="w-[36.48px] h-[36.48px] bg-gray-400 rounded-full"></div>
          <p>Nova Max House</p>
        </div>
      ),
      Date: <p className="tracking-wide">7/20/2024</p>,
      Plan: (
        <Chip
          className="capitalize rounded-full bg-[#FFF7EC] text-[#FFBB0B] !px-6 p-3 w-max"
          value="Premium"
        />
      ),
      View: <AlignLeft className="text-[#787878]" />,
    },
    {
      Name: (
        <div className="flex gap-2 items-center justify-start">
          <div className="w-[36.48px] h-[36.48px] bg-gray-400 rounded-full"></div>
          <p>Cooper City</p>
        </div>
      ),
      Date: "7/20/2024",
      Plan: (
        <Chip
          className="capitalize rounded-full bg-[#FFF7EC] text-[#FFBB0B] !px-6 p-3 w-max"
          value="Premium"
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
      Date: "7/22/2024",
      Plan: (
        <Chip
          className="capitalize rounded-full bg-[#E4FFDE] text-[#5DBA47] !px-6 p-3 w-max"
          value="Basic"
        />
      ),
      View: <AlignLeft className="text-[#787878]" />,
    },
  ];

  return (
    <>
      <Metrics />
      <Card className="shadow-none  w-full">
        <CardBody className="w-full px-0">
          <Typography variant="h6" className="mb-4 font-gilroy-semi-bold">
            New Projects
          </Typography>
          <Table data={projects} />
        </CardBody>
      </Card>
      {/* <ProjectsTable /> */}
    </>
  );
}
