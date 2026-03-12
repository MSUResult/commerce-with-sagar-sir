import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppIcon = () => {
  const phoneNumber = "7618550475";
  const message = "Hello! I'm interested in your web development services.";

  // Encodes the message for a URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20ba5a] transition-all hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} color="white" fill="white" />

      {/* Tooltip on hover */}
      <span className="absolute right-20 scale-0 group-hover:scale-100 transition-all origin-right bg-gray-800 text-white text-xs py-2 px-3 rounded-md whitespace-nowrap">
        Chat with me!
      </span>
    </a>
  );
};

export default WhatsAppIcon;
