"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

const courses = [
  {
    id: "class-12-accounts",
    title: "Class 12: Accounts",
    shortDescription:
      "Complete syllabus coverage with focus on board exam patterns and practical logic.",
    image: "/commercecoahing.jpeg",
    tag: "Board Special",
  },
  {
    id: "class-11-accounts",
    title: "Class 11: Accounts",
    shortDescription:
      "Build a rock-solid foundation in Microeconomics and Statistics from scratch.",
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
    // Changed bg-slate-50 to bg-transparent
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Subtle Scrim to protect text readability from floating symbols */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-blue-700 font-black uppercase tracking-widest text-[10px] md:text-xs mb-3"
            >
              <GraduationCap size={16} />
              Academic Excellence
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">
              Our Signature <span className="text-blue-600">Courses.</span>
            </h2>
          </div>
          <Link
            href="/courses"
            className="text-blue-700 font-black flex items-center gap-2 hover:gap-3 transition-all group text-sm md:text-base"
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
                {/* Updated Card: Transparent White with Backdrop Blur */}
                <div className="h-full bg-white/40 backdrop-blur-2xl rounded-[3rem] overflow-hidden border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/80 backdrop-blur-md text-blue-900 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-sm">
                        {course.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-500 mb-4">
                      <BookOpen size={16} className="text-blue-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        Full Syllabus
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow font-medium">
                      {course.shortDescription}
                    </p>

                    {/* Footer / Action */}
                    <div className="pt-8 border-t border-slate-200/50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                          <span className="text-white text-[10px] font-black">
                            IN
                          </span>
                        </div>
                        <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
                          Saharanpur Center
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-blue-700 font-black text-sm uppercase tracking-tight">
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
