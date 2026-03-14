"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import results from "@/data/results.json";

export default function ResultsPreview() {
  const [selected, setSelected] = useState<{
    id: number;
    image: string;
  } | null>(null);

  // We only show the first 4 results for the homepage preview
  const previewResults = results.slice(0, 4);

  return (
    // Changed to bg-transparent
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Radial Scrim for text clarity */}
      <div className="absolute inset-0 -z-10 ]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-blue-700 font-black text-[10px] tracking-[4px] uppercase block mb-3 drop-shadow-sm">
              ✦ Academic Excellence ✦
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
              Our <span className="text-blue-600">Achievers</span>
            </h2>
          </div>
          <p className="text-slate-700 max-w-md font-medium leading-relaxed">
            Celebrating the hard work and success of our top-performing students
            in the 2025 batch.
          </p>
        </div>

        {/* Results Grid - Glassmorphic Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {previewResults.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(item)}
              // Updated to Glassmorphism: bg-white/30 + backdrop-blur
              className="group relative cursor-pointer rounded-[2rem] overflow-hidden bg-white/30 backdrop-blur-xl border border-white/60 hover:border-blue-500/50 transition-all duration-500 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] hover:shadow-2xl"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={item.image}
                alt={`Result ${item.id}`}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />

              {/* Blue Gradient Overlay (matches your theme) */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-white text-[10px] font-black tracking-widest uppercase">
                  Rank #{item.id}
                </span>
                <div className="w-10 h-1 bg-blue-400 mt-2 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button - Fixed Colors */}
        <div className="flex justify-center">
          <Link href="/results">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-black text-sm md:text-base uppercase tracking-widest shadow-xl shadow-blue-200/50 hover:bg-blue-600 transition-all duration-300"
            >
              View All Results
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Lightbox - Enhanced for transparency theme */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-lg"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative max-w-[450px] w-full border-4 border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.image} alt="Result" className="w-full h-auto" />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 bg-white text-slate-900 w-12 h-12 rounded-full text-3xl font-light flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
