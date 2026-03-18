"use client";
import React, { useState, useEffect } from "react";
import { Share2, MessageCircle, Mail, Link2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleShare = async () => {
    // If on mobile and supports native share
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Master Accountancy with Sagar Sir",
          text: "Check out these top-rated Accountancy classes in Saharanpur!",
          url: shareUrl,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // On desktop, toggle our custom menu
      setIsOpen(!isOpen);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
            className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 rounded-3xl shadow-2xl flex flex-col gap-2 min-w-[180px] mb-2"
          >
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest px-3 py-1">Share via</p>
            
            <a 
              href={`https://wa.me/?text=${encodeURIComponent("Check this out: " + shareUrl)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 hover:bg-green-600 transition-colors group"
            >
              <MessageCircle size={18} className="text-green-500 group-hover:text-white" />
              <span className="text-white text-sm font-bold">WhatsApp</span>
            </a>

            <button 
              onClick={copyLink}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 hover:bg-blue-600 transition-colors group"
            >
              <Link2 size={18} className="text-blue-400 group-hover:text-white" />
              <span className="text-white text-sm font-bold">Copy Link</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleShare}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-16 h-16 flex items-center justify-center rounded-full shadow-2xl border transition-all duration-300 ${
          isOpen 
          ? 'bg-red-500 border-red-400 text-white' 
          : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-blue-600 hover:border-blue-500'
        }`}
        aria-label="Share Page"
      >
        {isOpen ? <X size={28} /> : <Share2 size={28} />}
        
        {/* Mirror of your WhatsApp Tooltip */}
        <span className="absolute left-20 scale-0 group-hover:scale-100 transition-all origin-left bg-gray-900/90 backdrop-blur-sm text-white text-xs py-2 px-4 rounded-xl whitespace-nowrap border border-white/10 shadow-xl lg:block hidden">
          Share this page
        </span>
      </motion.button>
    </div>
  );
};

export default ShareButton;