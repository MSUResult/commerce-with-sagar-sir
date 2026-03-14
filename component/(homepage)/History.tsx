"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  sentenceVariants,
  wordVariants,
  cardContainer,
  cardItem,
} from "./AnimateIn";

import Counter from "./CounterAnimation";

const History = () => {
  const cards = [
    { value: 800, suffix: "+", title: "Satisfied Clients" },
    { value: 5, suffix: "/5", title: "Rating" },
    { value: 10, suffix: "+", title: "Years Experience" },
    { value: 100, suffix: "%", title: "Success Rate" },
  ];

  const text =
    "“Shaping young minds to master commerce, achieve excellence, with confidence every step of the way.”";
  const words = text.split(" ");
  const highlightWords = ["minds", "commerce", "confidence"];

  return (
    <main className="relative min-h-screen flex flex-col items-center py-20 space-y-16 px-6 bg-transparent">
      {/* Subtle Scrim: This makes the center area clearer without hiding the symbols */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src="/sagar.jpg"
          alt="logo"
          height={100}
          width={100}
          className="rounded-full border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
        />
      </motion.div>

      {/* Heading with enhanced visibility */}
      <div className="max-w-4xl relative">
        <motion.h1
          variants={sentenceVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-4xl md:text-6xl font-black leading-tight text-slate-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]"
        >
          {words.map((word, index) => {
            const cleanWord = word.replace(/[,.“”]/g, "");
            const isHighlighted = highlightWords.includes(cleanWord);

            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className={`inline-block mr-2 ${
                  isHighlighted
                    ? "text-blue-700 italic font-extrabold"
                    : "text-slate-900"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>
      </div>

      {/* Cards container */}
      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-7xl px-4"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardItem}
            whileHover={{
              y: -12,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            // Increased bg opacity to 50% and blur to 3xl for maximum text clarity
            className="group relative flex flex-col items-center justify-center p-8 md:p-10 rounded-[2.5rem] bg-white/50 backdrop-blur-3xl border border-white shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-500 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-100/40 blur-3xl rounded-full" />

            {/* Number and Suffix */}
            <div className="relative flex items-baseline">
              <span className="text-blue-600 font-black tracking-tighter text-5xl md:text-6xl">
                <Counter value={card.value} />
              </span>
              <span className="text-2xl font-bold text-blue-500 ml-1">
                {card.suffix}
              </span>
            </div>

            <div className="w-10 h-1 bg-slate-200 rounded-full my-5 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />

            {/* Title - Darkened for better contrast */}
            <p className="text-slate-700 tracking-[0.15em] text-[10px] md:text-xs uppercase font-black text-center leading-relaxed">
              {card.title}
            </p>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default History;
