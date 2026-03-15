"use client";
import Image from 'next/image'
import React from 'react'
import { TrendingUp, Award, Medal, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HomepagePartner = () => {
  const features = [
    {
      icon: <TrendingUp className="text-blue-400 group-hover:text-white transition-colors" size={24} />,
      title: "Conceptual Clarity",
      subtitle: "That Builds Rank & Results"
    },
    {
      icon: <Award className="text-blue-400 group-hover:text-white transition-colors" size={24} />,
      title: "10+ Years of Excellence",
      subtitle: "in Saharanpur"
    },
    {
      icon: <Medal className="text-blue-400 group-hover:text-white transition-colors" size={24} />,
      title: "C.A Finalist",
      subtitle: "Expert Faculty"
    }
  ]

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <main className='min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-8 md:px-14 lg:px-24 bg-transparent overflow-hidden'>
      
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[150px] -z-10" />

      <motion.section 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10 w-full max-w-7xl'
      >
        
        {/* Left Side: Content */}
        {/* Changed z-index to 40 and added lg:pr-12 to push the text away from the image */}
        <div className='w-full lg:w-3/5 space-y-8 md:space-y-12 order-2 lg:order-1 text-center lg:text-left relative z-40 lg:pr-12'>
          <div className="space-y-4">
            <motion.h1 
              variants={itemVars}
              className='font-black text-5xl sm:text-6xl md:text-7xl xl:text-7xl text-white leading-[1.1] tracking-tighter'
            >
              Master Accountancy <br className="hidden md:block" />
              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent italic inline-block pr-6 pb-2'>
                with Sagar Sir
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVars}
              className='text-lg md:text-2xl font-medium text-blue-100/80 max-w-2xl mx-auto lg:mx-0'
            >
              Transforming complex numbers into career-defining confidence through innovation.
            </motion.p>
          </div>

          {/* Feature Cards Grid */}
          <motion.div 
            variants={itemVars}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-2xl mx-auto lg:mx-0'
          >
            {features.map((item, index) => (
              <div 
                key={index} 
                className='group flex items-center text-left gap-4 p-4 rounded-2xl border border-blue-500/20 bg-white/5 backdrop-blur-xl hover:bg-blue-600/10 hover:border-blue-400/50 transition-all duration-300 shadow-xl'
              >
                <div className="bg-blue-600/20 group-hover:bg-blue-500 p-3 rounded-xl border border-blue-500/30 shrink-0 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-white font-bold text-lg leading-tight'>{item.title}</h3>
                  <p className='text-blue-300/70 text-sm font-semibold mt-0.5'>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVars} className="pt-4 lg:hidden">
             <Link href={'/contact'} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-black text-lg shadow-lg transition-all active:scale-95">
                ENROLL NOW <ArrowRight size={20} />
             </Link>
          </motion.div>
        </div>

        {/* Right Side: Image Container */}
        {/* Set to z-10 so it sits behind the text layer */}
      {/* Right Side: Image Container */}
<motion.div 
  variants={itemVars}
  className='w-full lg:w-[40%] order-1 lg:order-2 relative group max-w-md lg:max-w-none mx-auto z-10'
>
  <div className="absolute -inset-4 bg-blue-600/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000" />
  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
  
  {/* Added 'aspect-square' for mobile to prevent it from being too tall/zoomed */}
  <div className='relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl aspect-square md:aspect-[4/5] lg:aspect-[3/4] bg-blue-900/20'>
    <Image 
      src='/siruse.png' 
      alt='Sagar Sir - Accountancy Expert' 
      width={800} 
      height={1000} 
      /* CHANGES MADE HERE:
         1. Added 'scale-90' on mobile to "zoom out" (md:scale-100 resets it for desktop).
         2. Changed to 'object-contain' on mobile so the whole image fits without cropping.
      */
      className="w-full h-full object-contain md:object-cover object-top scale-90 md:scale-100 transition-transform duration-1000 group-hover:scale-105"
      priority
    />
    
    {/* This button stays hidden on mobile to keep the image clear */}
    <div className="absolute bottom-8 right-8 hidden lg:block">
      <Link href={'/contact'} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-black text-lg shadow-2xl transform transition hover:-translate-y-1 active:scale-95">
        ENROLL NOW <ArrowRight size={20} />
      </Link>
    </div>

    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
        <p className="text-white text-xs font-bold tracking-widest uppercase">Best in Saharanpur</p>
    </div>
  </div>
</motion.div>

      </motion.section>
    </main>
  )
}

export default HomepagePartner