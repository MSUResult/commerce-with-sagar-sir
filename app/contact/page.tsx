"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    selectedClass: "",
  });

  const phoneNumber = "7618550475";

  const handleEnroll = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.selectedClass) {
      alert("Please fill in all fields.");
      return;
    }
    const message = `Hello Amit Sir, I would like to enroll.%0A%0A*Name:* ${formData.name}%0A*Class:* ${formData.selectedClass}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* LEFT SIDE: Enrollment Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] shadow-2xl"
        >
          <div className="mb-8">
            <h2 className="text-4xl font-black text-white mb-2">Enroll Now</h2>
            <p className="text-white/60">
              Secure your seat for the 2026 Batch today.
            </p>
          </div>

          <form onSubmit={handleEnroll} className="space-y-6">
            <div>
              <label className="block text-white font-bold text-sm mb-2 ml-1">
                Student Name
              </label>
              <input
                type="text"
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white/10 transition-all"
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-white font-bold text-sm mb-2 ml-1">
                Class Preference
              </label>
              <select
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white/10 appearance-none transition-all"
                value={formData.selectedClass}
                onChange={(e) =>
                  setFormData({ ...formData, selectedClass: e.target.value })
                }
              >
                <option value="" className="text-black">
                  Select your class
                </option>
                <option value="Class 11th Accountancy" className="text-black">
                  Class 11th Accountancy
                </option>
                <option value="Class 12th Accountancy" className="text-black">
                  Class 12th Accountancy
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-lg flex items-center justify-center gap-3 shadow-lg shadow-red-900/20 transform transition active:scale-[0.98]"
            >
              <MessageCircle size={22} />
              Enroll via WhatsApp
            </button>
          </form>
        </motion.div>

        {/* RIGHT SIDE: Contact Details & Map */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem]"
          >
            <h2 className="text-4xl font-black text-white mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                    Call Us
                  </p>
                  <p className="text-white font-bold">+91 7618550475</p>
                </div>
              </a>

              <a
                href="mailto:shivanshsingh4539@gmail.com"
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                    Email Address
                  </p>
                  <p className="text-white font-bold">
                    shivanshsingh4539@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center text-red-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
                    Our Campus
                  </p>
                  <p className="text-white font-bold leading-tight">
                    Jain Mandir Awas Vikas Park, <br /> Saharanpur, UP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl h-[280px] grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.345678901234!2d77.5912345!3d29.9612345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzQwLjQiTiA3N8KwMzUnMjguNCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
