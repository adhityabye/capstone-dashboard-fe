import Sidebar from "./Sidebar";

export default function LayoutWrapper({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="w-full p-8 bg-[#EFF2F9] flex-grow">{children}</div>
    </div>
  );
}
