import { Search, Bell, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

export function TopBar() {
  const location = useLocation();
  const pathName = location.pathname === "/" ? "Dashboard" : location.pathname.slice(1);
  const title = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  return (
    <header className="h-16 sticky top-0 z-30 flex items-center justify-between px-8 bg-[#0B1220]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-8 flex-1">
        <div className="relative group w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
          <input
            type="text"
            placeholder="Search shipments, routes..."
            className="w-full bg-[#111827] border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-sm"
          />
        </div>
        <div className="text-sm text-slate-400 font-medium">
          Dashboard <span className="mx-2 text-slate-600">/</span> <span className="text-slate-200">{title}</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:text-white text-slate-300 transition-colors">
          <span className="text-sm font-medium">Owner</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
        </button>

        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 p-[2px]">
          <div className="w-full h-full rounded-full bg-[#111827] flex items-center justify-center overflow-hidden">
            <img src="https://picsum.photos/seed/avatar/100/100" alt="User" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}
