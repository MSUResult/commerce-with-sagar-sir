"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To detect active route
import { Menu, X } from "lucide-react"; // X icon for closing
import { AnimateContainer } from "./AnimateIn";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const router = useRouter();

  const NavItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Results", href: "/results" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/about#faq" },
  ];

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimateContainer>
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center group">
              <div className="">
                <Image
                  src="/sagar.jpg"
                  alt="logo"
                  height={40}
                  width={70}
                  className="rounded-full"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 items-center space-x-1">
              {NavItems.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-95"
                onClick={() => router.push("/contact")}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-xl transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            {NavItems.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Closes menu on click
                className={`text-lg font-semibold p-3 rounded-xl transition-colors ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold"
              onClick={() => router.push("contact")}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </nav>
    </AnimateContainer>
  );
};

export default Navbar;
