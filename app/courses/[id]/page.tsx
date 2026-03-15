import courses from "@/data/course.json";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export default async function CourseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) notFound();

  return (
    <main className="min-h-screen bg-transparent py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/courses"
          className="text-blue-600 font-medium flex items-center mb-6 hover:underline"
        >
          ← Back to Saharanpur Commerce Courses
        </Link>

        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden mb-10 shadow-xl border border-blue-50">
          <Image
            src={course.image}
            alt={`${course.title} Saharanpur`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent flex flex-col justify-end p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {course.title}
            </h1>
            <p className="text-blue-100 max-w-xl">{course.shortDescription}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Course Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {course.fullDescription}
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Subjects - with Safety Check */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">
                  Commerce Subjects
                </h3>
                <ul className="space-y-2">
                  {course.subjects?.map((s, i) => (
                    <li key={i} className="text-blue-800 flex items-center">
                      <span className="mr-2 text-blue-400">✔</span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights - with Safety Check */}
              <div className="bg-blue-900 p-6 rounded-2xl text-white">
                <h3 className="font-bold mb-3 text-lg">Why Choose Us?</h3>
                <ul className="space-y-2 opacity-90">
                  {course.highlights?.map((h, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">⭐</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ - with Safety Check */}
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Course FAQs
              </h2>
              <div className="space-y-4">
                {course.faqs?.map((faq, i) => (
                  <div key={i} className="border-b border-blue-100 pb-4">
                    <h4 className="font-semibold text-blue-900 mb-1">
                      {faq.q}
                    </h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 bg-white border-2 border-blue-600 p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Join the Best in Saharanpur
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                Limited seats for Class 11 & 12 Commerce.
              </p>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
                Book Free Demo Class
              </button>
              <p className="mt-4 text-xs text-gray-400">
                #SaharanpurCommerce #Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
