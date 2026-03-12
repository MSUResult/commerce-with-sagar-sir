"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

// Assuming your courses data looks like this
const courses = [
  {
    id: "class-12-accounts",
    title: "Class 12: Accountancy",
    shortDescription:
      "Complete syllabus coverage with focus on board exam patterns and practical logic.",
    image: "/commercecoahing.jpeg", // Replace with your actual image path
    tag: "Board Special",
  },
  {
    id: "class-11-economics",
    title: "Class 11: Economics",
    shortDescription:
      "Build a rock-solid foundation in Microeconomics and Statistics from scratch.",
    image: "/class12h.jpeg", // Replace with your actual image path
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
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-3"
            >
              <GraduationCap size={16} />
              Academic Excellence
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Our Signature <span className="text-blue-600">Courses.</span>
            </h2>
          </div>
          <Link
            href="/courses"
            className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={cardVariants}>
              <Link
                href={`/courses/${course.id}`}
                className="group block h-full"
              >
                <div className="h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-blue-950 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-sm">
                        {course.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-400 mb-4">
                      <BookOpen size={16} />
                      <span className="text-xs font-semibold uppercase tracking-widest">
                        Full Syllabus
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                      {course.shortDescription}
                    </p>

                    {/* Footer / Action */}
                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                          <span className="text-blue-600 text-[10px] font-bold">
                            IN
                          </span>
                        </div>
                        <span className="text-xs font-bold text-slate-400">
                          Saharanpur Center
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
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
