import { useRouter } from "next/router";
import SideBar from "./SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { pathname } = router;

  const nonSideBarRoutes = ["/admin/pricing", "/admin/contact"];
  return (
    <div className="flex h-screen bg-gray-100">
      {!nonSideBarRoutes.includes(pathname) && <SideBar />}
      <main
        className={`${
          nonSideBarRoutes.includes(pathname)
            ? "mx-auto w-full h-full"
            : "py-5 flex-1  pr-[83.59px]"
        } overflow-y-auto bg-white`}
      >
        {children}
      </main>
    </div>
  );
}
