import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutVisionary = () => {
  const stats = [
    { label: "YEARS", value: "10+" },
    { label: "STUDENTS", value: "5000+" },
    { label: "RESULTS", value: "99.9%" },
  ]

  return (
    <section className="min-h-screen w-full flex items-center justify-center py-10 md:py-16 px-4 md:px-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-stretch gap-0 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-blue-950/20 backdrop-blur-sm shadow-2xl">
        
        {/* Left Side: Image Section */}
        {/* Adjusted height for mobile (aspect-square) to ensure the face is visible */}
        <div className="relative w-full lg:w-1/2 aspect-square lg:aspect-auto min-h-[350px] lg:min-h-[600px]">
          <Image
            src="/sir.jpeg" 
            alt="The Visionary"
            fill
            className="object-cover object-top"
            priority
          />
          
          {/* Slanted Overlay - Hidden on mobile to keep the image clean */}
          <div 
            className="absolute inset-0 bg-blue-900/40 mix-blend-multiply hidden lg:block"
            style={{ clipPath: 'polygon(85% 0, 100% 0, 100% 100%, 70% 100%)' }}
          ></div>

          {/* Gold Medal Badge - Scaled down for mobile */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 w-14 h-14 md:w-20 md:h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.4)] border-4 border-yellow-300 animate-pulse z-10">
             <span className="text-2xl md:text-4xl">🏅</span>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full lg:w-1/2 p-6 md:p-16 flex flex-col justify-center space-y-6 md:space-y-8 relative">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[80px] md:blur-[100px] -z-10"></div>

          <div className="space-y-1 md:space-y-2 text-center lg:text-left">
            <h3 className="text-white text-3xl md:text-6xl font-black tracking-tighter uppercase">
              The Visionary
            </h3>
            <h2 className="text-blue-500 text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Sagar Sir
            </h2>
          </div>

          <p className="text-gray-300 text-base md:text-xl leading-relaxed font-medium text-center lg:text-left">
            C.A Finalist with over 10 years of transformative teaching experience. Recognized as Saharanpur's most innovative Accountancy educator, having guided thousands of students to academic excellence.
          </p>

          {/* Statistics Grid - Optimized for tight mobile screens */}
          <div className="grid grid-cols-3 gap-2 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-blue-900/30 border border-blue-500/20 p-3 md:p-6 rounded-xl md:rounded-2xl text-center hover:border-blue-400/50 transition-colors shadow-lg"
              >
                <div className="text-xl md:text-4xl font-black text-blue-500 italic">
                  {stat.value}
                </div>
                <div className="text-[8px] md:text-xs font-bold text-white tracking-widest mt-1 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action - Centered on mobile */}
          <div className="pt-4 flex justify-center lg:justify-start">
             <Link href={'/contact'} className="w-full md:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black text-lg shadow-[0_10px_20px_rgba(0,0,0,0.3)] transform transition hover:-translate-y-1 active:scale-95">
                ENROLL NOW
             </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutVisionary