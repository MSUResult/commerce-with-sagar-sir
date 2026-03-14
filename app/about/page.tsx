"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, HelpCircle } from "lucide-react";
import Image from "next/image";

const AboutAndFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Conceptual Mastery",
      desc: "We don't just teach accounts; we build the logic behind every entry.",
    },
    {
      title: "Personalized Mentorship",
      desc: "Sagar Sir personally monitors the progress of every single student.",
    },
    {
      title: "Exam-Oriented Strategy",
      desc: "Special focus on CBSE/ISC board patterns and time management.",
    },
    {
      title: "Proven Track Record",
      desc: "The highest number of 95+ scorers in Saharanpur year after year.",
    },
  ];

  const faqs = [
    {
      question: "Which subjects are covered?",
      answer:
        "We offer comprehensive coaching for Accountancy, Economics, and Business Studies for Class 11, 12, and professional foundation courses.",
    },
    {
      question: "Is there a provision for demo classes?",
      answer:
        "Yes, we provide 2-day free demo sessions so students can experience Sagar Sir's unique teaching style before enrolling.",
    },
    {
      question: "How do you handle doubt clearing?",
      answer:
        "We have dedicated doubt-clearing hours every weekend and a 24/7 WhatsApp support group directly with Sagar Sir.",
    },
    {
      question: "What is the batch size?",
      answer:
        "We maintain small, focused batches to ensure every student receives personalized attention and regular feedback.",
    },
  ];

  return (
    <section className="w-full bg-transparent py-12 md:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-2">
        {/* --- Part 1: Hero Intro --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h4 className="text-blue-600 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:sm mb-4">
              Legacy of Excellence
            </h4>
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-blue-950 leading-[1.1] md:leading-[0.9] mb-6 md:mb-8">
              Defining the Future of{" "}
              <span className="text-blue-600">Commerce.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              At <strong>Commerce with Sagar Sir</strong>, we believe education
              is the lighting of a fire. Based in Saharanpur, we’ve redefined
              Accountancy and Economics.
            </p>

            <div className="flex justify-center lg:justify-start gap-6 md:gap-8">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-black text-blue-600">
                  10+
                </p>
                <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-tighter">
                  Years of Trust
                </p>
              </div>
              <div className="w-[1px] h-10 md:h-12 bg-gray-200" />
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-black text-blue-600">
                  500+
                </p>
                <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-tighter">
                  90% Scorers
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative px-4 sm:px-0"
          >
            {/* Optimized container for mobile: smaller border and border-radius */}
            <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-blue-50">
              <Image
                src="/sir.jpeg"
                alt="Sagar Sir Classroom"
                width={600}
                height={700}
                className="object-cover w-full h-auto aspect-[4/5]"
                priority
              />
            </div>
            {/* Blobs hidden on very small screens to prevent overflow issues */}
            <div className="hidden sm:block absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60" />
          </motion.div>
        </div>

        {/* --- Part 2: The "Why Us" Grid --- */}
        <div className="bg-blue-900 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden mb-20 md:mb-32">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                Why Sagar Sir is the First Choice?
              </h3>
              <p className="text-blue-100 text-sm md:text-lg mb-8 opacity-80">
                Success isn't just about memorizing—it's about logic. Our
                pedagogy makes complex concepts intuitive.
              </p>
              <button className="w-full sm:w-auto bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
                Book a Demo Class
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/10"
                >
                  <CheckCircle2
                    className="text-blue-400 mb-3 md:mb-4"
                    size={24}
                  />
                  <h5 className="font-bold text-base md:text-lg mb-2">
                    {f.title}
                  </h5>
                  <p className="text-xs md:text-sm text-blue-100/70 leading-snug">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Part 3: Integrated FAQ Section --- */}
        <div className="mt-20 md:mt-32" id="faq">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
              <HelpCircle size={14} />
              Have Questions?
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-blue-950">
              Common <span className="text-blue-600">Queries</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden bg-gray-50/50 shadow-sm"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-white transition-colors gap-4"
                >
                  <span className="font-bold text-blue-950 text-base md:text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="text-blue-600 bg-blue-50 p-1.5 md:p-2 rounded-full shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 md:p-6 pt-0 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndFAQ;
