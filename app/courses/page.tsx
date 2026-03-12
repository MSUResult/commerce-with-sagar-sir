"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import courses from "@/data/course.json";

// SEO & JSON-LD Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": courses.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Course",
      "name": course.title,
      "description": course.shortDescription,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Saharanpur Commerce Academy",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Saharanpur",
          "addressRegion": "UP",
          "addressCountry": "IN"
        }
      },
      "image": `https://yourdomain.com${course.image}`
    }
  }))
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
    <main className="min-h-screen bg-white py-20 px-6">
      {/* Inject JSON-LD for SEO Ranking */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm"
          >
            #1 Commerce Coaching in Saharanpur
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mt-2 mb-4">
            Master Commerce with Sagar Sir
          </h1>
          <p className="text-blue-900/60 text-lg max-w-2xl mx-auto">
            Providing high-quality education for Class 11 & 12 students in Saharanpur. 
            Join our success-driven batches today.
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
              <Link href={`/courses/${course.id}`} className="group block h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full bg-white border border-blue-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
                >
                  {/* Card Image Wrapper */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={course.image}
                      alt={`${course.title} - Saharanpur's Best Coaching`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <span className="bg-white/90 backdrop-blur-sm text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                        Saharanpur Batch 2026
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {course.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                         {/* Visual indicator of subjects or students */}
                         {[1,2,3].map((i) => (
                           <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                             {i === 3 ? '100+' : '★'}
                           </div>
                         ))}
                         <span className="pl-4 text-xs text-blue-900/50 font-medium self-center">Join 500+ Students</span>
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                        Explore Course
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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