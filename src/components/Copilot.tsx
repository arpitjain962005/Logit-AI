import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { cn } from "../utils";

export function Copilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-500 transition-all z-50",
          isOpen && "opacity-0 pointer-events-none"
        )}
      >
        <Sparkles className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-[#1C1918]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-2 text-white font-serif font-medium">
                <Sparkles className="w-5 h-5 text-blue-400" />
                The Informant
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar font-serif">
              <div className="flex flex-col gap-1 items-start">
                <div className="bg-white/5 text-slate-200 p-3 rounded-2xl rounded-tl-sm text-sm border border-white/5">
                  3 consignments are at risk of interception by the Lee boys. Estimated exposure: <span className="text-yellow-400 font-medium">£42,000</span>.
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="bg-white/5 text-slate-200 p-3 rounded-2xl rounded-tl-sm text-sm border border-white/5">
                  Reroute the canal boats to the rail network. The coppers are watching. Increases our cut by <span className="text-green-400 font-medium">2.1%</span>.
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="bg-white/5 text-slate-200 p-3 rounded-2xl rounded-tl-sm text-sm border border-white/5">
                  Demand for the 'special cargo' in London is up <span className="text-blue-400 font-medium">18%</span> this week. Sabini is losing his grip.
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-white/5 space-y-3">
              <div className="flex flex-wrap gap-2">
                {["Show Interception Risk", "Forecast Demand", "Compare Runners", "Plan the Route"].map((chip) => (
                  <button
                    key={chip}
                    className="text-xs font-serif px-3 py-1.5 rounded-full bg-white/5 text-slate-300 hover:bg-blue-500/20 hover:text-blue-400 border border-white/5 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the informant..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm font-serif italic text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
                <button className="absolute right-2 p-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
