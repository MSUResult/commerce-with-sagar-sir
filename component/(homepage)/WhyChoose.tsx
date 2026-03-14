"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Users,
  TrendingUp,
  Laptop,
  Award,
} from "lucide-react";
import Link from "next/link";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description:
        "Direct guidance from Sagar Sir, specializing in conceptual clarity for Class 11th & 12th Commerce.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Result Oriented",
      description:
        "Proven track record of high-scoring students in Saharanpur with a focus on board excellence.",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Digital Integration",
      description:
        "Modern learning with digital notes, WhatsApp support, and a dedicated scholarship portal.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Personalized Growth",
      description:
        "Small batch sizes to ensure every student's doubts are addressed individually and effectively.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Comprehensive Material",
      description:
        "Curated study modules for Accountancy and Economics designed for the latest exam patterns.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scholarship Programs",
      description:
        "Rewarding merit through our custom scholarship calculator and performance-based incentives.",
    },
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black tracking-[0.2em] text-sm uppercase mb-3"
          >
            THE PREMIER CHOICE
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-black leading-tight"
          >
            Why Choose{" "}
            <span className="text-blue-600">Commerce with Sagar Sir?</span>
          </motion.h3>
          <div className="w-20 h-2 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              // bg-white/70 ensures black text is clear; backdrop-blur-xl keeps background visible
              className="p-8 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-blue-500/20 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h4 className="text-2xl font-black text-black mb-3">
                {item.title}
              </h4>

              <p className="text-slate-900 font-medium leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="px-12 py-5 bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-blue-700 hover:shadow-[0_10px_20px_rgba(37,99,235,0.4)] transform transition active:scale-95 shadow-xl"
          >
            GET STARTED NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
