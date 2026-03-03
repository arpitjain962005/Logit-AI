import { motion } from "motion/react";
import { cn } from "../utils";

const updates = [
  { id: 1, text: "Storehouse South dispatch moving smoothly.", type: "positive", time: "2m ago" },
  { id: 2, text: "Runner Billy showing signs of delay.", type: "warning", time: "5m ago" },
  { id: 3, text: "Route C police presence detected.", type: "negative", time: "12m ago" },
  { id: 4, text: "London takings accelerating.", type: "positive", time: "18m ago" },
  { id: 5, text: "Pounds at risk: £42,000 on Route D.", type: "revenue", time: "22m ago" },
  { id: 6, text: "Demand in Camden Town up 18%.", type: "positive", time: "1h ago" },
];

export function LiveUpdates() {
  return (
    <div className="mb-8">
      <h3 className="text-xs font-serif font-semibold text-slate-500 uppercase tracking-wider mb-3 px-1">Whispers from the Street</h3>
      <div className="relative flex overflow-hidden bg-[#1C1918]/70 rounded-xl border border-white/5 py-3 group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#12100E] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#12100E] to-transparent z-10" />
        
        <div className="flex animate-scroll whitespace-nowrap gap-6 pl-6">
          {[...updates, ...updates].map((update, i) => (
            <div key={`${update.id}-${i}`} className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <div className={cn(
                "w-2 h-2 rounded-full shadow-sm",
                update.type === "positive" && "bg-green-500 shadow-green-500/50",
                update.type === "warning" && "bg-amber-500 shadow-amber-500/50",
                update.type === "negative" && "bg-red-500 shadow-red-500/50",
                update.type === "revenue" && "bg-yellow-400 shadow-yellow-400/50"
              )} />
              <span className="text-sm font-serif text-slate-300">
                {update.text.split(/(£\d+(?:,\d+)*)/g).map((part, j) => 
                  part.startsWith('£') ? <span key={j} className="text-yellow-400 font-medium">{part}</span> : part
                )}
              </span>
              <span className="text-xs text-slate-500 ml-2">{update.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
