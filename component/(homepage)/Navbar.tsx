"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimateContainer } from "./AnimateIn";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const NavItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Results", href: "/results" },
    { name: "Blog", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/about#faq" },
  ];

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimateContainer>
      <nav
        className="sticky top-0 z-50 w-full
        bg-black/20 backdrop-blur-xl
        border-b border-white/10
        shadow-[0_0_20px_rgba(59,130,246,0.15)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/sagar.jpg"
                alt="logo"
                height={40}
                width={70}
                className="rounded-full"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {NavItems.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-blue-400 bg-white/10 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                        : "text-white/80 hover:text-blue-400 hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <button
                onClick={() => router.push("/contact")}
                className="bg-blue-600/80 hover:bg-blue-600
                text-white px-6 py-2.5 rounded-xl font-semibold
                transition-all duration-300
                shadow-[0_0_15px_rgba(59,130,246,0.4)]
                hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
                active:scale-95"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-blue-400 transition p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full
          bg-black/50 backdrop-blur-xl
          border-b border-white/10
          shadow-xl
          transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-6 space-y-3">

            {NavItems.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold p-3 rounded-xl transition ${
                  pathname === link.href
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/contact");
              }}
              className="w-full mt-2
              bg-blue-600 hover:bg-blue-700
              text-white py-3 rounded-xl
              font-bold transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </AnimateContainer>
  );
};

export default Navbar;