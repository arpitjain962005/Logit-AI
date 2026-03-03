import { PageTransition } from "../components/PageTransition";
import { motion } from "motion/react";
import { Target } from "lucide-react";
import { cn } from "../utils";

const targets = [
  { title: "Our Cut", target: "15%", current: "13.2%", progress: 88, color: "blue" },
  { title: "Quarterly Takings", target: "£12M", current: "£10.4M", progress: 86, color: "yellow", isRevenue: true },
  { title: "Successful Runs", target: "95%", current: "92.4%", progress: 97, color: "green" },
  { title: "Network Control", target: "90%", current: "84%", progress: 93, color: "teal" },
];

export function Targets() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto pb-20">
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-semibold text-white tracking-tight flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <Target className="w-6 h-6" />
            </div>
            Our Ambitions
          </h1>
          <p className="text-slate-400 mt-2 font-serif italic">Track progress against key performance indicators.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {targets.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#1C1918]/90 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-sm font-serif font-medium text-slate-400 mb-2">{item.title}</h3>
                  <div className="flex items-baseline gap-3">
                    <span className={cn(
                      "text-3xl font-semibold",
                      item.isRevenue ? "text-yellow-400" : "text-white"
                    )}>
                      {item.current}
                    </span>
                    <span className="text-sm text-slate-500">/ {item.target} target</span>
                  </div>
                </div>
                <div className="text-2xl font-light text-slate-600">
                  {item.progress}%
                </div>
              </div>

              <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                  className={cn(
                    "h-full rounded-full",
                    item.color === "blue" && "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
                    item.color === "yellow" && "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]",
                    item.color === "green" && "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]",
                    item.color === "teal" && "bg-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.5)]",
                  )}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
