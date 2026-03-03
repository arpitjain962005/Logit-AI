import { motion } from "motion/react";
import { AnimatedNumber } from "./AnimatedNumber";
import { TrendingUp, TrendingDown, AlertCircle, Activity, DollarSign, Package, BrainCircuit } from "lucide-react";
import { cn } from "../utils";

const kpis = [
  {
    title: "Active Shipments",
    value: 128,
    icon: Package,
    trend: "+12%",
    isPositive: true,
    subtext: "vs last week",
    color: "blue",
  },
  {
    title: "Revenue in Transit",
    value: 4820000,
    prefix: "$",
    icon: DollarSign,
    trend: "+4.2%",
    isPositive: true,
    subtext: "projected EOD",
    color: "yellow",
    highlight: true,
  },
  {
    title: "Margin at Risk",
    value: 186400,
    prefix: "$",
    icon: AlertCircle,
    trend: "-1.1%",
    isPositive: false,
    subtext: "requires attention",
    color: "amber",
  },
  {
    title: "On-Time Delivery",
    value: 92.4,
    suffix: "%",
    icon: Activity,
    trend: "+0.8%",
    isPositive: true,
    subtext: "above target",
    color: "green",
  },
  {
    title: "AI Operational Score",
    value: 84,
    suffix: " / 100",
    icon: BrainCircuit,
    trend: "+2",
    isPositive: true,
    subtext: "optimal efficiency",
    color: "teal",
    isRing: true,
  },
];

export function KPIStrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={cn(
            "relative p-5 rounded-2xl bg-[#111827]/80 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 group overflow-hidden",
            kpi.highlight && "border-yellow-500/20 hover:border-yellow-500/40 shadow-[0_0_15px_rgba(250,204,21,0.05)]",
            kpi.color === "amber" && "hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]"
          )}
        >
          {/* Subtle background glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex justify-between items-start mb-4 relative z-10">
            <span className="text-sm font-medium text-slate-400">{kpi.title}</span>
            <div className={cn(
              "p-2 rounded-lg bg-white/5",
              kpi.color === "blue" && "text-blue-400",
              kpi.color === "yellow" && "text-yellow-400",
              kpi.color === "amber" && "text-amber-400",
              kpi.color === "green" && "text-green-400",
              kpi.color === "teal" && "text-teal-400",
            )}>
              <kpi.icon className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-baseline gap-2 relative z-10">
            <span className={cn(
              "text-3xl font-semibold tracking-tight",
              kpi.highlight ? "text-yellow-400" : "text-white"
            )}>
              <AnimatedNumber value={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} />
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs relative z-10">
            <span className={cn(
              "flex items-center gap-1 font-medium",
              kpi.isPositive ? "text-green-400" : "text-red-400"
            )}>
              {kpi.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {kpi.trend}
            </span>
            <span className="text-slate-500">{kpi.subtext}</span>
          </div>

          {/* Decorative sparkline/ring placeholder */}
          {kpi.isRing && (
            <svg className="absolute right-4 bottom-4 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity" viewBox="0 0 36 36">
              <path
                className="text-slate-700"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-teal-400"
                strokeDasharray={`${kpi.value}, 100`}
                strokeWidth="3"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
