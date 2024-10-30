import SideBar from "./SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      <main className="flex-1 py-5  pr-[83.59px] overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  );
}
