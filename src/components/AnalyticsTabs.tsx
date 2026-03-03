import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { cn } from "../utils";

const tabs = ["Runners", "Routes", "Territories"];

const dataTransporters = [
  { name: "Arthur", value: 94, fill: "#B89768" },
  { name: "John", value: 86, fill: "#DAA520" },
  { name: "Finn", value: 91, fill: "#8B7355" },
];

const dataRoutes = [
  { name: "Canal", value: 12.1, fill: "#D4AF37" },
  { name: "Rail", value: 14.4, fill: "#D4AF37" },
  { name: "Road", value: 13.2, fill: "#D4AF37" },
];

const dataRegions = [
  { name: "Birmingham", value: 18, fill: "#6B8E23" },
  { name: "London", value: 9, fill: "#6B8E23" },
  { name: "Liverpool", value: 4, fill: "#6B8E23" },
];

export function AnalyticsTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const getData = () => {
    switch (activeTab) {
      case "Runners": return dataTransporters;
      case "Routes": return dataRoutes;
      case "Territories": return dataRegions;
      default: return dataTransporters;
    }
  };

  const getFormat = (val: number) => {
    if (activeTab === "Runners") return `${val}%`;
    if (activeTab === "Routes") return `${val}%`;
    if (activeTab === "Territories") return `+${val}%`;
    return val;
  };

  return (
    <div className="bg-[#1C1918]/90 backdrop-blur-md border border-white/5 rounded-2xl p-6 h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-serif font-semibold text-white tracking-wide">The Books</h3>
        <div className="flex bg-black/20 p-1 rounded-lg border border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative px-4 py-1.5 text-sm font-medium rounded-md transition-colors",
                activeTab === tab ? "text-white" : "text-slate-400 hover:text-slate-200"
              )}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-md border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getData()} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={getFormat} />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                  contentStyle={{ backgroundColor: '#1C1918', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontFamily: 'Playfair Display' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value: number) => [getFormat(value), 'Value']}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={60}>
                  {getData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
