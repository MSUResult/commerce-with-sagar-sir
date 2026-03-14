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
    <main className="relative min-h-screen overflow-hidden flex items-center flex-col pt-28 px-4 z-10">

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">

        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] md:w-[50rem] md:h-[50rem] rounded-full bg-blue-400/20 blur-[120px] animate-blob"></div>

        <div className="absolute top-[20%] right-[-5%] w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] rounded-full bg-purple-400/20 blur-[120px] animate-blob animation-delay-2000"></div>

        <div className="absolute bottom-[-10%] left-[10%] w-[35rem] h-[35rem] md:w-[45rem] md:h-[45rem] rounded-full bg-cyan-400/20 blur-[120px] animate-blob animation-delay-4000"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <AnimateContainer>
        <div className="flex flex-col items-center text-center">

          <AnimateItem>
            <div className="bg-white/60 backdrop-blur-xl border border-blue-200/50 rounded-full py-2 px-5 flex gap-2 items-center mb-8 shadow-xl">
              <span className="bg-blue-600 p-1.5 rounded-full text-white">
                <Book size={14} />
              </span>
              <p className="text-blue-900 text-xs md:text-sm font-bold tracking-widest uppercase">
                Commerce With Sagar Sir
              </p>
            </div>
          </AnimateItem>

          <AnimateItem>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1]">
              Elite{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Commerce
              </span>
              <br />

              Coaching

              <span className="inline-flex mx-3 align-middle rotate-3">
                <Image
                  src="/student4.jpg"
                  alt="Students"
                  height={80}
                  width={160}
                  className="rounded-3xl object-cover border-4 border-white shadow-2xl h-14 w-28 md:h-20 md:w-44"
                />
              </span>

              by Sachin
            </h1>

            <p className="max-w-xl text-slate-500 mt-8 text-base md:text-xl leading-relaxed font-medium">
              Join Saharanpur&apos;s most trusted academic community.
              Transform your future with industry-leading commerce expertise.
            </p>
          </AnimateItem>

          <AnimateItem>
            <div className="mt-10 group relative">

              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition"></div>

              <button
                onClick={() => router.push("/contact")}
                className="relative bg-slate-900 hover:bg-blue-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg flex items-center gap-3 transition active:scale-95 shadow-2xl"
              >
                Start Your Journey
                <ArrowRight size={22} />
              </button>
            </div>
          </AnimateItem>

          <AnimateItem>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-16 bg-white/30 backdrop-blur-md p-6 rounded-[2rem] border border-white/60 shadow-xl">

              <div className="flex -space-x-4">
                {images.map((url, index) => (
                  <div
                    key={index}
                    className="relative h-14 w-14 md:h-16 md:w-16 rounded-full border-4 border-white overflow-hidden"
                  >
                    <Image src={url} alt="Student" fill className="object-cover" />
                  </div>
                ))}

                <div className="h-14 w-14 md:h-16 md:w-16 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                  +8k
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start gap-1">

                <div className="flex items-center gap-2">

                  <div className="flex">
                    {[1,2,3,4,5].map((i)=>(
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400"/>
                    ))}
                  </div>

                  <span className="text-slate-900 font-black text-xl">4.9</span>
                </div>

                <p className="text-slate-600 font-semibold text-sm md:text-base">
                  The <span className="text-blue-600 font-black">Gold Standard</span> in Saharanpur
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