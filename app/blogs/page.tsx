"use client";
import React from "react";
import { motion } from "framer-motion";

const BlogComingSoon = () => {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        {/* Decorative Element */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="w-20 h-1 bg-blue-600 mx-auto mb-8"
        />

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
          THE <span className="text-blue-600">BLOG</span> IS <br />
          UNDER CONSTRUCTION
        </h1>

        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto">
          We’re busy crafting insightful articles, technical deep-dives, and
          digital stories. Something big is brewing—stay tuned.
        </p>

        {/* Action Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-red-200"
          >
            Notify Me
          </motion.button>

          <motion.a
            href="/"
            whileHover={{ x: 5 }}
            className="text-slate-900 font-semibold flex items-center gap-2 group"
          >
            Back to Home
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* Background Accent */}
      <div className="absolute top-0 right-0 -z-10 opacity-5">
        <h2 className="text-[20rem] font-bold text-blue-600 select-none">
          BLOG
        </h2>
      </div>
    </div>
  );
};

export default BlogComingSoon;
