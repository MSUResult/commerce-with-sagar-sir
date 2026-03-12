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
    <main className="min-h-screen flex flex-col items-center py-20 space-y-16 px-6">
      <div>
        <Image
          src="/sagar.jpg"
          alt="logo"
          height={80}
          width={120}
          className="rounded-full"
        />
      </div>

      {/* Heading */}
      <div className="max-w-4xl">
        <motion.h1
          variants={sentenceVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-5xl font-medium leading-tight text-slate-900"
        >
          {words.map((word, index) => {
            const cleanWord = word.replace(/[,.“”]/g, "");
            const isHighlighted = highlightWords.includes(cleanWord);

            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className={`inline-block mr-2 ${
                  isHighlighted ? "text-blue-600 italic font-semibold" : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>
      </div>

      {/* Cards container */}
      {/* Cards container */}
      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full max-w-6xl px-4"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardItem}
            whileHover={{
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group relative flex flex-col items-center justify-center p-10 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100/50 blur-3xl rounded-full group-hover:bg-blue-200/50 transition-colors duration-500" />

            {/* Number and Suffix */}
            <div className="relative flex items-baseline">
              <span className="text-blue-600 font-black tracking-tighter text-5xl md:text-6xl drop-shadow-sm">
                <Counter value={card.value} />
              </span>
              <span className="text-2xl font-bold text-blue-400 ml-1">
                {card.suffix}
              </span>
            </div>

            {/* Divider Line */}
            <div className="w-12 h-1 bg-blue-100 rounded-full my-4 group-hover:w-20 group-hover:bg-blue-500 transition-all duration-500" />

            {/* Title */}
            <p className="text-slate-500 tracking-[0.15em] text-xs uppercase font-bold text-center leading-relaxed">
              {card.title}
            </p>

            {/* Bottom Shimmer Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default History;
