import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { app_name, navLinks } from "@/lib/data";
import { CircleX, Menu } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="w-full mx-auto py-8 pb-10 shadow-none">
      <div className="container mx-auto max-w-custom flex md:px-8 items-center justify-between text-blue-gray-900">
        <Link
          href="/"
          className="text-black font-ab mr-4 cursor-pointer py-1.5 text-2xl font-[400]"
        >
          {app_name}
        </Link>
        <div className="hidden lg:block">
          <ul className="text-mediumGray font-inter mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navLinks.map((data, index) => (
              <Typography
                key={index}
                as="li"
                variant="small"
                className="flex items-center gap-x-2 p-1 text-mediumGray font-medium"
              >
                <Link href={data.href} className="flex items-center">
                  {data.name}
                </Link>
              </Typography>
            ))}
          </ul>
        </div>

        <Button
          // variant="filled"
          size="lg"
          className="capitalize font-inter font-normal text-sm hidden lg:inline-block bg-primary rounded-full"
        >
          <span>Get started</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <CircleX className="text-mediumGray" /> : <Menu />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-10">
          <ul className="font-inter mt-2 mb-4 flex flex-col gap-2 ">
            {navLinks.map((data, index) => (
              <Typography
                key={index}
                as="li"
                variant="small"
                className="flex items-center gap-x-2 p-1 font-medium text-mediumGray"
              >
                <a href={data.href} className="flex items-center">
                  {data.name}
                </a>
              </Typography>
            ))}
          </ul>
          <div className="flex items-center gap-x-1">
            <Button
              // variant="filled"
              size="lg"
              className="capitalize  lg:inline-block bg-primary rounded-full"
            >
              <span className="font-inter">Get started</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Hero;
