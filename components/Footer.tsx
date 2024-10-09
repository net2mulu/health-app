import { app_name, footerData } from "@/lib/data";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full mt-48">
      <div className="mx-auto w-full max-w-custom px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Typography className="text-black font-ab mr-4 cursor-pointer py-1.5 text-2xl font-[400]">
              {app_name}{" "}
            </Typography>

            <Typography className="max-w-sm font-inter text-xs md:text-sm text-[#808080]">
              {footerData.description}
            </Typography>
            <div className="flex justify-start items-center gap-4 ">
              <Image src="/x.png" alt="fb" width={18} height={12} />
              <Image src="/tg.png" alt="fb" width={18} height={12} />
              <Image src="/fb.png" alt="fb" width={18} height={12} />
            </div>
          </div>

          <div className="grid grid-cols-2 justify-between gap-4 mt-4 md:mt-0">
            {footerData.links.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  color="blue-gray"
                  className="mb-3 font-semibold text-mediumGray text-sm md:text-md"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1.5 font-normal text-xs md:text-sm text-[#808080] font-inter transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-start justify-center py-4 md:flex-row md:justify-between">
          <Typography
            // variant="small"
            className="mb-4 text-sm text-center font-inter font-normal text-[#858585] md:mb-0"
          >
            Copyright {currentYear} {footerData.company}
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography className="font-inter text-sm opacity-80 transition-opacity hover:opacity-100">
              {footerData.privacy}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
