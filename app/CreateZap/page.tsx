"use client";
import Sidebar from "@/component/SideBarIcons";
import Topbar from "@/component/topbar";
import WorkflowCanvas from "@/component/workspace";
export default function Dashboard() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <WorkflowCanvas />
      </div>
    </div>
  );
}
