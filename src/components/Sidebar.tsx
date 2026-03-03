import {
  LayoutDashboard,
  Package,
  BrainCircuit,
  Truck,
  Warehouse,
  PlusCircle,
  MinusCircle,
  Target,
  FileText,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../utils";
import { motion } from "motion/react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Shipments", path: "/shipments", icon: Package },
  { name: "Demand Intelligence", path: "/demand", icon: BrainCircuit },
  { name: "Transporters", path: "/transporters", icon: Truck },
  { name: "Warehouses", path: "/warehouses", icon: Warehouse },
  { name: "Plus", path: "/plus", icon: PlusCircle },
  { name: "Minus", path: "/minus", icon: MinusCircle },
  { name: "Targets", path: "/targets", icon: Target },
  { name: "Reports", path: "/reports", icon: FileText },
  { name: "Settings", path: "/settings", icon: Settings },
];

export function Sidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v: boolean) => void }) {
  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 260 }}
      className="fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-[#111827]/80 backdrop-blur-xl border-r border-white/5"
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <div className="flex items-center h-16 px-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center font-bold text-white shrink-0">
            L
          </div>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-semibold tracking-wide text-white"
            >
              LOGIT
            </motion.span>
          )}
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto no-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 relative group",
                isActive
                  ? "text-blue-400 bg-blue-500/10"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              )
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  />
                )}
                <item.icon className="w-5 h-5 shrink-0" />
                {!collapsed && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.name}
                  </span>
                )}
                
                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  );
}
