import { PageTransition } from "../components/PageTransition";
import { motion } from "motion/react";
import { TrendingUp, ArrowRight } from "lucide-react";

const signals = [
  { title: "On-Time Delivery", value: "+6%", desc: "improved by 6% this week", color: "green" },
  { title: "Revenue in Transit", value: "+8%", desc: "increased by 8% MoM", color: "yellow" },
  { title: "Route C Margin", value: "+3.4%", desc: "improved by 3.4% after optimization", color: "green" },
  { title: "Transporter A", value: "Top 5%", desc: "above industry benchmark", color: "blue" },
];

export function Plus() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto pb-20">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            Growth & Positive Signals
          </h1>
          <p className="text-slate-400 mt-2">Key areas of operational improvement and revenue growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, i) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative p-6 rounded-2xl bg-[#111827]/80 backdrop-blur-md border border-white/5 hover:border-green-500/30 transition-all duration-300 group overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-sm font-medium text-slate-400 mb-4">{signal.title}</h3>
              <div className="text-3xl font-semibold text-white mb-2">{signal.value}</div>
              <p className="text-sm text-slate-500 mb-6">{signal.desc}</p>

              {/* Mini trend chart placeholder */}
              <svg className="w-full h-12 mb-6 opacity-60" viewBox="0 0 100 30" preserveAspectRatio="none">
                <path d="M0,30 Q25,20 50,10 T100,0 L100,30 L0,30 Z" fill="url(#grad-green)" opacity="0.2" />
                <path d="M0,30 Q25,20 50,10 T100,0" fill="none" stroke="#22C55E" strokeWidth="2" />
                <defs>
                  <linearGradient id="grad-green" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity="1" />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <button className="flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
                View Details <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
