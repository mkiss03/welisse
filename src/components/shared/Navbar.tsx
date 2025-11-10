"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Szolgáltatások", href: "#szolgaltatasok" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Árazás", href: "#arazas" },
    { label: "Rólunk", href: "#rolunk" },
    { label: "Kapcsolat", href: "#kapcsolat" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#0A0A0A]/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white transition-all hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text"
        >
          Welisse
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
          >
            <a href="#kapcsolat">Ingyenes Konzultáció</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-purple-500/50 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
            >
              <a href="#kapcsolat">Ingyenes Konzultáció</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
