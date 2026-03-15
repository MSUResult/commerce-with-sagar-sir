"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Youtube,
  Instagram,
  Send,
  MessageCircle,
  Facebook,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const linkItem = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// SEO FIX: Added descriptive paths instead of "#"

const socialLinks = [
  {
    icon: <Youtube size={20} />,
    label: "YouTube",
    href: "https://youtube.com/@yourchannel",
    color: "hover:text-red-600",
  },
  {
    icon: <Instagram size={20} />,
    label: "Instagram",
    href: "https://www.instagram.com/commercewithsagarsir?igsh=dGtwdnJ4bGNqcWw0",
    color: "hover:text-pink-500",
  },
 
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    href: "https://wa.me/8218615688",
    color: "hover:text-green-500",
  },
  {
    icon: <Facebook size={20} />,
    label: "Facebook",
    href: "https://facebook.com/yourpage",
    color: "hover:text-blue-600",
  },
];

const courses = [
  { name: "Commerce Class 11", href: "/courses/commerce-class-11" },

  { name: "Commerce Class 12", href: "/courses/commerce-class-12" },
];

const quickLinks = [
  { name: "About Sharan Sir", href: "/about" },
  { name: "Free Notes PDF", href: "" },

  { name: "Test Series", href: "" },
  { name: "Results & Toppers", href: "/results" },
  { name: "Student Reviews", href: "/" },
  { name: "Contact Us", href: "/contact" },
];

const contactItems = [
  { icon: "📍", label: "Location", value: "Saharanpur, India" },
  { icon: "📞", label: "Call / WhatsApp", value: "+91 8218615688" },
  { icon: "✉", label: "Email", value: "sagarchanna22@gmail.com" },
];

export default function CommerceFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white font-sans mt-10">
      {/* Animated top strip */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-[length:200%_100%] animate-pulse" />

      {/* Subtle BG decorative circles (toned down blue) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] -top-[200px] -right-[100px] rounded-full bg-blue-900/5" />
        <div className="absolute w-[300px] h-[300px] -bottom-[100px] -left-[80px] rounded-full bg-blue-900/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-xl font-black text-white shadow-lg shadow-slate-900/50">
                C
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white leading-tight">
                  Commerce with Sharan Sir
                </div>
                <div className="text-[10px] font-medium text-blue-400 tracking-widest uppercase mt-0.5">
                  Commerce Academy
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-sm text-slate-400 leading-relaxed mb-6 pr-4"
            >
              India's most trusted commerce coaching institute. Master Commerce
              Studies with Sharan Sir's unique teaching methodology.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-2.5"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 ${link.color} hover:bg-white hover:scale-110 shadow-lg`}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Courses Column */}
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1}
              className="text-[11px] tracking-[2.5px] uppercase text-blue-400 font-semibold mb-5"
            >
              Courses
            </motion.p>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {courses.map((c) => (
                <motion.li key={c.name} variants={linkItem}>
                  <FooterLink href={c.href}>
                    {c.name}
                    {c.badge && (
                      <span className="inline-block bg-gradient-to-br from-blue-600 to-blue-500 text-white text-[9px] font-semibold tracking-wide px-1.5 py-0.5 rounded ml-2 uppercase align-middle">
                        {c.badge}
                      </span>
                    )}
                  </FooterLink>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.1}
              className="text-[11px] tracking-[2.5px] uppercase text-blue-400 font-semibold mb-5"
            >
              Quick Links
            </motion.p>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {quickLinks.map((l) => (
                <motion.li key={l.name} variants={linkItem}>
                  <FooterLink href={l.href}>{l.name}</FooterLink>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact + Newsletter Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
          >
            <p className="text-[11px] tracking-[2.5px] uppercase text-blue-400 font-semibold mb-5">
              Connect
            </p>

            <div className="space-y-4 mb-6">
              {contactItems.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 text-sm text-blue-400">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 uppercase tracking-wide mb-0.5">
                      {c.label}
                    </div>
                    <div className="text-[13px] text-slate-300">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 bg-blue-900/30 border border-blue-800/50 rounded-full px-3 py-1 text-[11px] text-blue-400 font-medium mb-3">
                📬 Newsletter
              </div>
              <p className="text-[13px] text-slate-400 mb-3">
                Get free study tips & updates.
              </p>
              <div className="flex rounded-lg overflow-hidden border border-white/10 focus-within:border-blue-500 transition-colors">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  className="flex-1 bg-white/5 border-none px-3.5 py-2.5 text-[13px] text-white outline-none"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-blue-600 px-4 py-2.5 text-[13px] font-medium hover:bg-blue-500 transition-colors whitespace-nowrap active:scale-95"
                >
                  {subscribed ? "✓ Done!" : "Subscribe"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p className="text-[13px] text-slate-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-medium">
            Commerce with Sharan Sir
          </span>
          . All rights reserved.
        </p>

        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Use", "Refund Policy"].map((l) => (
            <a
              key={l}
              href={`/${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-xs text-slate-500 hover:text-blue-400 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-500 flex items-center">
          Made with <HeartBeat /> for Commerce students
        </p>
      </motion.div>
    </footer>
  );
}

// Simplified FooterLink using Tailwind's 'group' utilities instead of JS state
function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
    >
      <span className="h-[1px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-3" />
      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
        {children}
      </span>
    </a>
  );
}

function HeartBeat() {
  return (
    <motion.span
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      className="text-red-500 inline-block mx-1"
    >
      ♥
    </motion.span>
  );
}
