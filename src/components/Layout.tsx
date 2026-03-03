import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { Copilot } from "./Copilot";
import { useState } from "react";
import { motion } from "motion/react";

export function Layout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="min-h-screen flex bg-[#0B1220] text-slate-200 font-sans selection:bg-blue-500/30">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <motion.div
        animate={{ marginLeft: collapsed ? 80 : 260 }}
        className="flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out"
      >
        <TopBar />
        <main className="flex-1 p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </motion.div>

      <Copilot />
    </div>
  );
}
