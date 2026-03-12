"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen bg-slate-50 py-20 px-4 sm:px-4 lg:px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Let's Build Something <span className="text-blue-600">Great.</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach
            out. I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* --- Contact Info Cards --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6"
          >
            {[
              {
                icon: <Mail className="text-blue-600" />,
                title: "Email Me",
                detail: "hello@yourdomain.com",
                link: "mailto:hello@yourdomain.com",
              },
              {
                icon: <Phone className="text-blue-600" />,
                title: "Call/WhatsApp",
                detail: "+91 7618550475",
                link: "tel:+917618550475",
              },
              {
                icon: <MapPin className="text-blue-600" />,
                title: "Location",
                detail: "Saharanpur, Uttar Pradesh, India",
                link: "#",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-slate-900 font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-slate-500">{item.detail}</p>
                </div>
              </motion.a>
            ))}

            {/* Fun Fact / Trust Box */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-blue-600 rounded-[2.5rem] text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <MessageSquare className="mb-4 opacity-50" size={40} />
                <h3 className="text-xl font-bold mb-2">
                  Technical Discussion?
                </h3>
                <p className="text-blue-100 text-sm">
                  I love talking about Next.js, SEO optimization, and UI/UX
                  animations. Let's grab a virtual coffee!
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>

          {/* --- Contact Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Project Inquiry"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 mb-8">
                    Thanks for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
