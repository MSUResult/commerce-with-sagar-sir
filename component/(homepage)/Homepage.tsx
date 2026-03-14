"use client";

import { Book, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { AnimateContainer, AnimateItem } from "./AnimateIn";
import { useRouter } from "next/navigation";

const images = [
  "https://images.unsplash.com/photo-1524069290683-0457abfe42c3",
  "https://images.unsplash.com/photo-1737825101103-c35677e6bd45",
  "https://images.unsplash.com/photo-1656266724105-302774929dfd",
  "https://images.unsplash.com/photo-1604177091072-b7b677a077f6",
];

const Homepage = () => {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-x-hidden flex items-center flex-col pt-20 md:pt-32 px-4 z-10">
      {/* Animated Background - Kept your original colors */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] md:w-[50rem] md:h-[50rem] rounded-full bg-blue-400/20 blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-5%] w-[25rem] h-[25rem] md:w-[40rem] md:h-[40rem] rounded-full bg-purple-400/20 blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] rounded-full bg-cyan-400/20 blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px]"></div>
      </div>

      <AnimateContainer>
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Badge */}
          <AnimateItem>
            <div className="bg-white/60 backdrop-blur-xl border border-blue-200/50 rounded-full py-2 px-4 md:px-5 flex gap-2 items-center mb-6 md:mb-8 shadow-xl">
              <span className="bg-blue-600 p-1.5 rounded-full text-white">
                <Book size={14} />
              </span>
              <p className="text-blue-900 text-[10px] md:text-sm font-bold tracking-widest uppercase">
                Commerce With Sagar Sir
              </p>
            </div>
          </AnimateItem>

          {/* Hero Heading */}
          <AnimateItem>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-slate-900 leading-[1.1] md:leading-[1]">
              Elite{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Commerce
              </span>
              <br className="hidden sm:block" />
              <span className="inline-block">Coaching</span>
              <span className="inline-flex mx-2 md:mx-3 align-middle rotate-3 shrink-0">
                <Image
                  src="/student4.jpg"
                  alt="Students"
                  height={80}
                  width={160}
                  className="rounded-2xl md:rounded-3xl object-cover object-top border-2 md:border-4 border-white shadow-2xl h-10 w-20 sm:h-14 sm:w-28 md:h-16 md:w-36"
                />
              </span>
              <span className="inline-block">by Sachin</span>
            </h1>

            <p className="max-w-xl mx-auto text-center text-slate-500 mt-6 md:mt-8 text-base md:text-xl leading-relaxed font-medium px-2">
              Join Saharanpur&apos;s most trusted academic community. Transform
              your future with industry-leading commerce expertise.
            </p>
          </AnimateItem>

          {/* CTA Button */}
          <AnimateItem>
            <div className="mt-8 md:mt-10 group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <button
                onClick={() => router.push("/contact")}
                className="relative bg-slate-900 hover:bg-blue-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg flex items-center gap-3 transition-all active:scale-95 shadow-2xl"
              >
                Start Your Journey
                <ArrowRight size={22} />
              </button>
            </div>
          </AnimateItem>

          {/* Social Proof Section */}
          <AnimateItem>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-16 md:mt-20 bg-white/30 backdrop-blur-md p-6 rounded-[2rem] border border-white/60 shadow-xl mb-12">
              <div className="flex -space-x-3 md:-space-x-4">
                {images.map((url, index) => (
                  <div
                    key={index}
                    className="relative h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-white overflow-hidden"
                  >
                    <Image
                      src={url}
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 md:border-4 border-white bg-blue-600 flex items-center justify-center text-white font-black text-xs md:text-sm">
                  +8k
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400 md:w-5 md:h-5"
                      />
                    ))}
                  </div>
                  <span className="text-slate-900 font-black text-lg md:text-xl">
                    4.9
                  </span>
                </div>

                <p className="text-slate-600 font-semibold text-xs md:text-base">
                  The{" "}
                  <span className="text-blue-600 font-black">
                    Gold Standard
                  </span>{" "}
                  in Saharanpur
                </p>
              </div>
            </div>
          </AnimateItem>
        </div>
      </AnimateContainer>
    </main>
  );
};

export default Homepage;
