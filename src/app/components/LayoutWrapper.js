import Sidebar from "./SideBar";

export default function LayoutWrapper({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="w-4/5 p-8 bg-[#EFF2F9]"> {children}</div>
    </div>
  );
}
