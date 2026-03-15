"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

const courses = [
  {
    id: "accountancy-class-12",
    title: "Class 12: Accountancy",
    shortDescription:
      "Complete Accountancy syllabus coverage with focus on board exam patterns, practical problems, and scoring strategies.",
    image: "/commercecoahing.jpeg",
    tag: "Board Special",
  },
  {
    id: "accountancy-class-11",
    title: "Class 11: Accountancy",
    shortDescription:
      "Build a strong foundation in Accountancy concepts, journal entries, and financial statements from the beginning.",
    image: "/class12h.jpeg",
    tag: "Foundation",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CoursePreview() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Subtle Scrim - adjusted opacity to blend better with purple */}
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-fuchsia-300 font-black uppercase tracking-widest text-[10px] md:text-xs mb-3"
            >
              <GraduationCap size={16} />
              Academic Excellence
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Our Signature <span className="text-fuchsia-400">Courses.</span>
            </h2>
          </div>
          <Link
            href="/courses"
            className="text-fuchsia-300 font-black flex items-center gap-2 hover:gap-3 hover:text-fuchsia-200 transition-all group text-sm md:text-base"
          >
            View All Programs <ArrowRight size={20} />
          </Link>
        </div>

        {/* Course Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={cardVariants}>
              <Link
                href={`/courses/${course.id}`}
                className="group block h-full"
              >
                {/* Updated Card: Semi-transparent white to create glass effect over your purple bg */}
                <div className="h-full bg-white/10 backdrop-blur-2xl rounded-[3rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500 flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-purple-900 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-sm">
                        {course.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-purple-200 mb-4">
                      <BookOpen size={16} className="text-fuchsia-400" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        Full Syllabus
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-white mb-4 group-hover:text-fuchsia-300 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-purple-100 leading-relaxed mb-8 flex-grow font-medium">
                      {course.shortDescription}
                    </p>

                    {/* Footer / Action */}
                    <div className="pt-8 border-t border-white/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-fuchsia-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
                          <span className="text-white text-[10px] font-black">
                            IN
                          </span>
                        </div>
                        <span className="text-xs font-black text-purple-200 uppercase tracking-wider">
                          Saharanpur Center
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-fuchsia-300 font-black text-sm uppercase tracking-tight">
                        Start Learning{" "}
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}