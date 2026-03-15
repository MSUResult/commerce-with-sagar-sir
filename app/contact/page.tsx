"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", selectedClass: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = "918218615688"; // Ensure country code is included

  const handleEnroll = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Hello Amit Sir, I would like to enroll.%0A%0A*Name:* ${formData.name}%0A*Class:* ${formData.selectedClass}`;
    
    // Small delay to let the user see the "loading" animation
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 bg-transparent">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE: Enrollment Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden group"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-colors duration-700" />

          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Enroll Now</h2>
            <p className="text-blue-100/60 font-medium">
              Join the 2026 Batch and master Accountancy with innovation.
            </p>
          </div>

          <form onSubmit={handleEnroll} className="space-y-6">
            <div className="space-y-2">
              <label className="text-white/80 font-bold text-sm ml-1 uppercase tracking-wider">Student Name</label>
              <input
                type="text"
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white/10 transition-all outline-none"
                placeholder="Ex: Shivansh Singh"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/80 font-bold text-sm ml-1 uppercase tracking-wider">Class Preference</label>
              <div className="relative">
                <select
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white/10 appearance-none cursor-pointer transition-all"
                  value={formData.selectedClass}
                  onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                >
                  <option value="" className="bg-slate-900 text-white">Select your class</option>
                  <option value="Class 11th Accountancy" className="bg-slate-900 text-white">Class 11th Accountancy</option>
                  <option value="Class 12th Accountancy" className="bg-slate-900 text-white">Class 12th Accountancy</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">▼</div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 ${
                isSubmitting ? 'bg-red-800 opacity-70' : 'bg-red-600 hover:bg-red-500 hover:shadow-red-600/30'
              } text-white`}
            >
              <MessageCircle size={22} className={isSubmitting ? "animate-bounce" : ""} />
              {isSubmitting ? "Opening WhatsApp..." : "Enroll via WhatsApp"}
            </button>
          </form>
        </motion.div>

        {/* RIGHT SIDE: Details */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-[3rem]"
          >
            <h2 className="text-3xl font-black text-white mb-8">Direct Contact</h2>

            <div className="space-y-8">
              <ContactLink icon={<Phone size={20} />} label="Call Us" value="+91 76185 50475" href="tel:+918218615688" />
              <ContactLink icon={<Mail size={20} />} label="Email Us" value="sagarchanna22@gmail.com" href="mailto:sagarchanna22@gmail.com" />
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-red-600/20 flex items-center justify-center text-red-500 shadow-inner">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Our Campus</p>
                  <p className="text-white font-bold leading-tight">Makhan Colony ( Near Subhash Atta Chakki ) , Saharanpur</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl h-[300px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.123!2d77.54!3d29.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzM2LjAiTiA3N8KwMzInMjQuMCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2 hover:bg-white/20 transition-all"
            >
              VIEW ON GOOGLE MAPS <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Reusable Contact Link Component to keep code clean
const ContactLink = ({ icon, label, value, href }) => (
  <a href={href} className="flex items-center gap-5 group">
    <div className="w-12 h-12 rounded-2xl bg-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner">
      {icon}
    </div>
    <div>
      <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{label}</p>
      <p className="text-white font-bold group-hover:text-red-400 transition-colors">{value}</p>
    </div>
  </a>
);

export default ContactSection;