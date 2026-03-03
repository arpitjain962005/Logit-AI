import { motion } from "motion/react";
import { MapPin, Truck } from "lucide-react";

export function MapWidget() {
  return (
    <div className="relative w-full h-[400px] bg-[#111827]/80 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1200/600')] bg-cover bg-center opacity-20 mix-blend-luminosity grayscale" />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />

      {/* Title */}
      <div className="absolute top-6 left-6 z-20">
        <h3 className="text-lg font-semibold text-white tracking-wide">Live Logistics Movement</h3>
        <p className="text-sm text-slate-400 mt-1">Real-time tracking & risk assessment</p>
      </div>

      {/* Animated Routes & Trucks */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 800 400" preserveAspectRatio="none">
        {/* Route 1 - Green */}
        <motion.path
          d="M 100 300 Q 300 100 500 200 T 700 100"
          fill="none"
          stroke="rgba(34, 197, 94, 0.3)"
          strokeWidth="3"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Route 2 - Amber/Pulsing */}
        <motion.path
          d="M 200 350 Q 400 250 600 300 T 750 200"
          fill="none"
          stroke="rgba(245, 158, 11, 0.6)"
          strokeWidth="4"
          className="drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Route 3 - Red */}
        <motion.path
          d="M 50 150 Q 250 50 450 150 T 650 50"
          fill="none"
          stroke="rgba(239, 68, 68, 0.4)"
          strokeWidth="2"
          strokeDasharray="4,4"
        />
      </svg>

      {/* Floating Hover Card (Simulated interaction) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileHover={{ opacity: 1, scale: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 p-4 bg-[#111827]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl cursor-pointer"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">Shipment ID: LG-2847</div>
            <div className="text-xs text-slate-400">En route to Chicago Hub</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-slate-500 text-xs mb-1">Revenue</div>
            <div className="text-yellow-400 font-semibold">$42,000</div>
          </div>
          <div>
            <div className="text-slate-500 text-xs mb-1">Margin</div>
            <div className="text-green-400 font-semibold">12.4%</div>
          </div>
          <div className="col-span-2">
            <div className="text-slate-500 text-xs mb-1">Risk Level</div>
            <div className="text-amber-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Medium
            </div>
          </div>
        </div>
      </motion.div>

      {/* Map Pins */}
      <div className="absolute top-[20%] left-[60%] z-20 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
        <MapPin className="w-6 h-6" />
      </div>
      <div className="absolute top-[60%] left-[30%] z-20 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
        <MapPin className="w-6 h-6 animate-bounce" />
      </div>
    </div>
  );
}
