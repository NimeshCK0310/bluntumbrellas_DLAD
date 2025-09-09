"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";

import logo from "../../../public/images/collections/logo.svg";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Shop", href: "#" },
    { name: "About", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Journal", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image src={logo} alt="Blunt Umbrellas Logo" width={150} height={40} priority />
        </Link>

        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link, index) => (
            <m.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={link.href} className="text-gray-800 hover:text-black transition-colors duration-200">
                {link.name}
              </Link>
            </m.div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {[Search, User, ShoppingBag].map((Icon, idx) => (
            <m.button
              key={idx}
              className="p-2 text-black hover:text-gray-600 transition-colors duration-200 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-5 w-5" />
              {Icon === ShoppingBag && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
              )}
            </m.button>
          ))}

          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 text-black hover:text-gray-600 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-800 hover:text-black transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
