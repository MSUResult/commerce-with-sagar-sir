"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import results from "@/data/results.json";

export default function ResultsPage() {
  const [selected, setSelected] = useState<{
    id: number;
    image: string;
  } | null>(null);

  return (
    <>
      {/* Container - Fixed horizontal overflow and responsive margins */}
      <div className="-mx-4 lg:-mx-48 bg-transparent min-h-screen overflow-x-hidden">
        {/* Hero Banner */}
        <section className="relative w-full py-16 md:py-28 px-6 text-center">
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-10 bg-blue-400 blur-3xl" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative text-blue-400 text-[10px] md:text-xs tracking-[0.5em] uppercase font-black mb-4"
          >
            ✦ Sum Of our Good Scorer ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6"
          >
            Results{" "}
            <span className="text-blue-500 italic font-light drop-shadow-2xl">
              2025
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium px-4"
          >
            Celebrating the extraordinary milestones achieved by our students.
            Their hard work is our greatest pride.
          </motion.p>
        </section>

        {/* Stats Bar */}
        <div className="max-w-6xl mx-auto px-6 -mt-8 mb-20 relative z-10">
          <div className="grid grid-cols-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl">
            {[
              { label: "Total Success", value: '500 +' },
              { label: "Top Scorers", value: "100+" },
              { label: "Batch", value: "2025" },
            ].map((s, idx) => (
              <div
                key={s.label}
                className={`text-center py-6 md:py-12 ${idx !== 2 ? "border-r border-white/5" : ""}`}
              >
                <div className="text-xl md:text-5xl font-black text-white">
                  {s.value}
                </div>
                <div className="text-[7px] md:text-[10px] text-blue-400 uppercase tracking-[0.2em] font-bold mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Grid - Fixed Image Cropping */}
        <div className="px-6 md:px-12 pb-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto"
          >
            {results.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                onClick={() => setSelected(item)}
                // Removed forced aspect ratio to allow auto-height if needed,
                // but kept a container for consistency
                className="group relative cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-lg flex flex-col"
              >
                {/* Image Wrapper - Using p-2 and object-contain to prevent border cutting */}
                <div className="relative w-full aspect-[3/4] bg-slate-900/40 p-1">
                  <img
                    src={item.image}
                    alt={`Result ${item.id}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle vignette so images blend better */}
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="p-4 md:p-5 bg-gradient-to-b from-white/5 to-transparent">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-blue-400 text-[9px] font-bold uppercase tracking-wider">
                      Official Scorecard
                    </span>
                  </div>
                  <h3 className="text-white text-base md:text-lg font-black tracking-tight">
                    Toppers
                  </h3>
                </div>

                {/* Hover Interaction Layer */}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-blue-600 px-4 py-2 rounded-full text-xs font-black shadow-xl scale-90 group-hover:scale-100 transition-transform">
                    VIEW FULL
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="text-center py-16 border-t border-white/5 bg-white/5 backdrop-blur-xl">
          <p className="text-slate-500 text-[10px] font-bold tracking-[0.4em] uppercase">
            Commerce Excellence Saharanpur • {results.length} Success Stories
          </p>
        </div>
      </div>

      {/* Lightbox - Fixed for all image sizes */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-950/95 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt="Full Result"
                className="w-auto h-auto max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-white/10 object-contain"
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 md:top-0 -right-0 md:-right-16 text-white/70 hover:text-white text-4xl font-light p-4 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
