"use client";

import { Book, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { AnimateContainer, AnimateItem } from "./AnimateIn";
import { useRouter } from "next/navigation";

const images = [
  "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1737825101103-c35677e6bd45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1656266724105-302774929dfd?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Homepage = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-white flex items-center flex-col pt-20 px-4">
      <AnimateContainer>
        <AnimateItem>
          {/* 1. Refined Badge: Using a softer blue and better spacing */}
          <div className="bg-blue-50 border border-blue-100 rounded-full py-2 px-5 flex gap-2 items-center mb-6 animate-fade-in">
            <span className="bg-blue-500 p-1 rounded-full text-white">
              <Book size={14} />
            </span>
            <p className="text-blue-700 text-sm font-semibold tracking-wide uppercase">
              Commerce With Sagar Sir
            </p>
          </div>
        </AnimateItem>

        <AnimateItem>
          {/* 2. Main Heading: High contrast with modern "Pill" image */}
          <h1 className="text-5xl md:text-6xl tracking-tight text-center font-black text-slate-900 leading-[1.1]">
            A <span className="text-blue-600 italic"> Commerce </span> Coaching
            Institute <br />
            Built for
            <span className="inline-flex items-center align-middle mx-3 transform -rotate-2">
              <Image
                src={"/student4.jpg"}
                alt="Students"
                height={60}
                width={120}
                className="rounded-2xl object-cover object-top border-4 border-white shadow-xl h-12 w-24 md:h-16 md:w-32"
              />
            </span>
            by Sachin
          </h1>

          {/* 3. Subtext: Improved readability and width control */}
          <p className="max-w-2xl mx-auto  w-full text-center text-slate-500 mt-8 text-lg md:text-xl leading-relaxed">
            Join the most trusted community in Saharanpur. We transform your
            academic journey with specialized commerce training designed for the
            modern student.
          </p>
        </AnimateItem>

        <AnimateItem>
          {/* 4. Call to Action: Professional button with hover interaction */}
          <div className="mt-10 flex gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-3xl font-bold flex items-center gap-2 transition-all hover:shadow-blue-200 hover:shadow-2xl active:scale-95 cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              New Batch Started
              <ArrowRight size={20} />
            </button>
          </div>
        </AnimateItem>

        {/* Review */}
        <AnimateItem>
          {/* Review Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 mt-12 animate-fade-in-up">
            {/* 1. The Avatar Stack */}
            <div className="flex -space-x-4">
              {" "}
              {/* Negative space creates the overlap */}
              {images.map((url, index) => (
                <div
                  key={index}
                  className="relative h-12 w-12 rounded-full border-4 border-white overflow-hidden shadow-sm hover:-translate-y-1 transition-transform cursor-pointer"
                  style={{ zIndex: images.length - index }} // Ensures first image is on top
                >
                  <Image
                    src={url}
                    alt="Student User"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              {/* Optional: A "plus" circle if you have many users */}
              <div className="h-12 w-12 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs z-0 shadow-sm">
                +8k
              </div>
            </div>

            {/* 2. The Rating Info */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-slate-900 font-bold">4.8/5</span>
              </div>
              <p className="text-slate-500 text-sm font-medium tracking-tight">
                Trusted by <span className="text-blue-600 font-bold">800+</span>{" "}
                students in Saharanpur
              </p>
            </div>
          </div>
        </AnimateItem>
      </AnimateContainer>
    </main>
  );
};

export default Homepage;
