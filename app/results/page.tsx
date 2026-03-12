"use client";

import { useState } from "react";
import results from "@/data/results.json"; // adjust path if needed

export default function ResultsPage() {
  const [selected, setSelected] = useState<{
    id: number;
    image: string;
  } | null>(null);

  return (
    <>
      {/* This breaks OUT of the md:px-52 padding in layout */}
      <div
        className="
        -mx-4 md:-mx-52
        bg-white min-h-screen
      "
      >
        {/* Hero Banner */}
        <div
          className="relative w-full py-16 px-6 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #1d4ed8 0%, #1e40af 40%, #1e3a8a 100%)",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-10 bg-white" />
          <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full opacity-10 bg-white" />
          <div className="absolute top-8 right-1/4 w-20 h-20 rounded-full opacity-10 bg-blue-300" />

          <p className="relative text-blue-200 text-xs tracking-[6px] uppercase font-mono mb-3">
            ✦ Our Achievers ✦
          </p>
          <h1 className="relative text-white text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Results{" "}
            <span className="text-blue-300 italic font-light">2025</span>
          </h1>
          <p className="relative text-blue-200 text-base max-w-md mx-auto leading-relaxed">
            Congratulations to all our brilliant students who made us proud this
            year.
          </p>
          <div className="relative mt-6 w-16 h-1 mx-auto bg-blue-300 rounded-full" />
        </div>

        {/* Stats bar */}
        <div
          className="flex divide-x divide-blue-100 border-b border-blue-100"
          style={{ background: "#eff6ff" }}
        >
          {[
            { label: "Total Results", value: results.length },
            { label: "Top Scorers", value: "4" },
            { label: "Batch", value: "2025" },
          ].map((s) => (
            <div key={s.label} className="flex-1 text-center py-4 px-2">
              <div className="text-2xl font-bold text-blue-700">{s.value}</div>
              <div className="text-xs text-blue-400 uppercase tracking-widest font-mono">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="px-6 md:px-16 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {results.map((item, i) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  background: "#f0f7ff",
                  border: "2px solid #bfdbfe",
                  boxShadow: "0 4px 20px rgba(29,78,216,0.08)",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  animationDelay: `${i * 80}ms`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-6px) scale(1.02)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 16px 40px rgba(29,78,216,0.22)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0) scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 20px rgba(29,78,216,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#bfdbfe";
                }}
              >
                {/* Image — fills card, top-aligned so face is always visible */}
                <img
                  src={item.image}
                  alt={`Result ${item.id}`}
                  className="w-full h-full object-cover object-top"
                  style={{ display: "block" }}
                />

                {/* Bottom gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(30,58,138,0.85) 100%)",
                  }}
                />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="w-6 h-0.5 bg-blue-300 rounded mb-1" />
                  <span className="text-blue-100 text-xs tracking-widest uppercase font-mono">
                    #{item.id}
                  </span>
                </div>

                {/* Zoom icon on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(29,78,216,0.12)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
                    style={{
                      background: "rgba(29,78,216,0.7)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    ⊕
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div
          className="text-center py-6 border-t border-blue-100"
          style={{ background: "#eff6ff" }}
        >
          <span className="text-blue-300 text-xs tracking-[4px] font-mono uppercase">
            {results.length} students · Batch 2025
          </span>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(15,23,42,0.9)",
            backdropFilter: "blur(10px)",
          }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              maxWidth: "420px",
              width: "100%",
              maxHeight: "85vh",
              border: "2px solid #3b82f6",
              boxShadow: "0 40px 80px rgba(29,78,216,0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={`Result ${selected.id}`}
              className="w-full h-full object-contain"
              style={{ display: "block", maxHeight: "85vh" }}
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-bold"
              style={{
                background: "rgba(29,78,216,0.8)",
                border: "1px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
