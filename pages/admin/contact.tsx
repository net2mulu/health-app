import { COMPANY_DESCRIPTION } from "@/lib/data";
import { ContactInfo } from "@/lib/types";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { CalendarClock, MapPinned, PhoneCall } from "lucide-react";

export default function Contact() {
  const contactInfo: ContactInfo[] = [
    {
      icon: CalendarClock,
      title: "Working hour",
      content: (
        <div className="space-y-1">
          <p>{COMPANY_DESCRIPTION.weekday}</p>
          <p>{COMPANY_DESCRIPTION.weekend}</p>
        </div>
      ),
    },
    {
      icon: MapPinned,
      title: "Our Address",
      content: <p>{COMPANY_DESCRIPTION.address}</p>,
    },
    {
      icon: PhoneCall,
      title: "Contact",
      content: (
        <div className="space-y-1">
          <p>Mobile: {COMPANY_DESCRIPTION.mobile}</p>
          <p>Mail: {COMPANY_DESCRIPTION.email}</p>
        </div>
      ),
    },
  ];
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <Card className="px-12 py-16 shadow-none border ">
          <div className="space-y-6">
            <Typography
              variant="paragraph"
              className="font-ab mb-16 font-normal text-[14px] leading-4 text-gray-600"
            >
              {COMPANY_DESCRIPTION.description}
            </Typography>

            <div className="space-y-12 mt-32">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start gap-4"
                >
                  <div className="rounded-lg flex gap-6">
                    <info.icon className="h-8 w-8 text-primary" />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-gilroy-semi-bold text-head-15 font-normal text-[#1E1E1E] mb-1"
                    >
                      {info.title}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="font-gilroy-semi-bold text-head-14 text-mediumGray"
                    >
                      {info.content}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-none ">
          <div className="space-y-6">
            <div className="my-16">
              <Typography
                variant="paragraph"
                className="text-lime font-gilroy-semi-bold font-normal"
              >
                {COMPANY_DESCRIPTION.subheading}
              </Typography>
              <Typography
                variant="h4"
                className="text-[#1E1E1E] font-gilroy-bold "
              >
                {COMPANY_DESCRIPTION.heading}
              </Typography>
            </div>

            <form className="space-y-12">
              <Input
                placeholder="Your name"
                size="lg"
                className="!border-t-blue-gray-200 !py-6  focus:!border-green-500 !rounded-full placeholder:opacity-100"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Input
                type="email"
                placeholder="email"
                size="lg"
                className="!border-t-blue-gray-200 !py-6 focus:!border-green-500 placeholder:opacity-100 !rounded-full"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Input
                type="text"
                placeholder="subject"
                size="lg"
                className="!border-t-blue-gray-200 !py-6 focus:!border-green-500 placeholder:opacity-100 !rounded-full"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Textarea
                placeholder="Write your message..."
                size="lg"
                className="!border-t-blue-gray-200 !px-4 focus:!border-green-500 rounded-[18px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                rows={4}
              />
              <Button
                size="lg"
                className="font-gilroy-semi-bold capitalize w-full bg-lime hover:bg-lime/30 rounded-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
