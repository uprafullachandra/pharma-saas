import Topbar from "@/components/Topbar";
import Toolbar from "@/components/Toolbar";
import Sidebar from "@/components/Sidebar";
import DashboardCards from "@/components/DashboardCards";
import Statusbar from "@/components/Statusbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Topbar />
      <Toolbar />
      <div className="flex flex-1">
        <Sidebar />
        <DashboardCards />
      </div>
      <Statusbar />
    </div>
  );
}
