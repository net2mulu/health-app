import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";
import {
  Home,
  Building,
  Users,
  MessageSquare,
  FileText,
  LogOut,
  ArrowRightLeft,
  BookCheck,
  BadgeDollarSign,
} from "lucide-react";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className="w-max pt-12 bg-white shadow-md flex flex-col px-14 items-center">
      <div className="p-4">
        <Typography
          variant="h5"
          className="font-ab text-2xl font-normal text-blue-900"
        >
          LOGOS.io
        </Typography>
      </div>
      <nav className="mt-6">
        {[
          { name: "Home", icon: Home, href: "/admin" },
          {
            name: "Facilities",
            icon: Building,
            href: "/admin/facilities",
          },
          { name: "Users", icon: Users, href: "/admin/users" },
          {
            name: "Messages",
            icon: MessageSquare,
            href: "/admin/messages",
          },
          { name: "Plan", icon: FileText, href: "/admin/plan" },
          {
            name: "Patient Portal",
            icon: ArrowRightLeft,
            href: "/admin/patient-portal",
          },
          {
            name: "Doc Portal",
            icon: BookCheck,
            href: "/admin/doc-portal",
          },
          {
            name: "Subscription",
            icon: BadgeDollarSign,
            href: "/admin/subscription",
          },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2 "
          >
            <Button
              className={`flex gap-2 rounded-full text-sm capitalize font-gilroy-semi-bold w-[189.11px]  ${
                pathname == item.href ? "text-white" : "text-[#616161]"
              }`}
              variant={pathname === item.href ? "filled" : "text"}
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="font-gilroy-semi-bold absolute border m-2 mb-12 bottom-0 rounded-13 p-6 flex flex-col gap-10 text-[#828282]">
        <Typography variant="small" className="mb-2  text-head-13">
          LOGOS.io admin page
        </Typography>
        <button className="flex items-center text-sm text-gray-900">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
