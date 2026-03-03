import { PageTransition } from "../components/PageTransition";
import { motion } from "motion/react";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { cn } from "../utils";

const risks = [
  { title: "High Interception Risk", value: "4 Consignments", desc: "72%+ risk of police or rival action", action: "Reassign", isRevenue: false },
  { title: "Bottleneck Detected", value: "Storehouse East", desc: "Processing time up 45%", action: "Review", isRevenue: false },
  { title: "Cost Variance", value: "Route B", desc: "+5% fuel inefficiency", action: "Optimize", isRevenue: false },
  { title: "Takings at Risk", value: "£186,400", desc: "Across 12 delayed consignments", action: "Review", isRevenue: true },
];

export function Minus() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto pb-20">
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-semibold text-white tracking-tight flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            The Losses & Threats
          </h1>
          <p className="text-slate-400 mt-2 font-serif italic">AI-detected operational risks and revenue exposure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {risks.map((risk, i) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative p-6 rounded-2xl bg-[#1C1918]/90 backdrop-blur-md border border-white/5 hover:border-red-500/30 transition-all duration-300 group overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-sm font-serif font-medium text-slate-400 mb-4">{risk.title}</h3>
              <div className={cn(
                "text-2xl font-semibold mb-2",
                risk.isRevenue ? "text-yellow-400" : "text-white"
              )}>
                {risk.value}
              </div>
              <p className="text-sm text-slate-500 mb-6 flex-1">{risk.desc}</p>

              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 border border-red-500/20 transition-colors text-sm font-medium">
                {risk.action} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
