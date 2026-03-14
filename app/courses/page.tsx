"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import courses from "@/data/course.json";

// SEO & JSON-LD Data remains the same
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: courses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Course",
      name: course.title,
      description: course.shortDescription,
      provider: {
        "@type": "LocalBusiness",
        name: "Saharanpur Commerce Academy",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Saharanpur",
          addressRegion: "UP",
          addressCountry: "IN",
        },
      },
      image: `https://yourdomain.com${course.image}`,
    },
  })),
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    // Changed to bg-transparent to show your .bg-container
    <main className="min-h-screen bg-transparent py-20 px-6 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs"
          >
            #1 Commerce Coaching in Saharanpur
          </motion.span>
          {/* Changed text to white/slate-50 for dark background visibility */}
          <h1 className="text-4xl md:text-7xl font-black text-slate-50 mt-4 mb-6 tracking-tight">
            Master Commerce with{" "}
            <span className="text-blue-500">Sagar Sir</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Providing high-quality education for Class 11 & 12 students in
            Saharanpur. Join our success-driven batches today.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={cardVariants}>
              <Link
                href={`/courses/${course.id}`}
                className="group block h-full"
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  // Glassmorphism: dark background with white transparency and heavy blur
                  className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-blue-500/50"
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={`${course.title} - Saharanpur's Best Coaching`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Darker gradient for image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-8">
                      <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
                        Saharanpur Batch 2026
                      </span>
                    </div>
                  </div>

                  <div className="p-10">
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                      {course.shortDescription}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-9 h-9 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-blue-400"
                          >
                            {i === 3 ? "100+" : "★"}
                          </div>
                        ))}
                        <span className="pl-4 text-xs text-slate-500 font-bold self-center uppercase tracking-widest">
                          Join 500+ Students
                        </span>
                      </div>

                      <div className="flex items-center text-blue-400 font-black text-sm uppercase group-hover:translate-x-2 transition-transform">
                        Explore
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
