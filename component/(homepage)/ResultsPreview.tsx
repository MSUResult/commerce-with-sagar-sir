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

  const previewResults = results.slice(0, 4);

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Radial Scrim */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-fuchsia-300 font-black text-[10px] tracking-[4px] uppercase block mb-3 drop-shadow-sm">
              ✦ Academic Excellence ✦
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Our <span className="text-fuchsia-400">Achievers</span>
            </h2>
          </div>
          <p className="text-purple-100 max-w-md font-bold leading-relaxed">
            Celebrating the hard work and success of our top-performing students
            in the 2025 batch.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {previewResults.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(item)}
              className="group relative cursor-pointer rounded-[2rem] overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 hover:border-fuchsia-500/50 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:shadow-2xl"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={item.image}
                alt={`Result ${item.id}`}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-white text-[10px] font-black tracking-widest uppercase">
                  Rank #{item.id}
                </span>
                <div className="w-10 h-1 bg-fuchsia-400 mt-2 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link href="/results">
            <motion.div 
              whileHover={{scale: 1.05, y: -2}} 
              whileTap={{scale: 0.95}} 
              className="group flex items-center gap-3 bg-white text-purple-900 px-10 py-5 rounded-full cursor-pointer inline-flex font-black uppercase text-sm tracking-widest shadow-xl shadow-purple-900/20"
            >
              View All Results
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative max-w-[450px] w-full border-4 border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.image} alt="Result" className="w-full h-auto" />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 bg-white text-purple-900 w-12 h-12 rounded-full text-3xl font-light flex items-center justify-center hover:bg-fuchsia-500 hover:text-white transition-colors shadow-lg"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}