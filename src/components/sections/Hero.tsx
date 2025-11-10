"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] pt-20">
      {/* Gradient Orbs */}
      <div className="absolute left-1/4 top-0 h-96 w-96 bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-pink-600/20 blur-3xl" />

      {/* Grid Background */}
      <div className="grid-background absolute inset-0 opacity-50" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-sm text-gray-300">Available for projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="mb-6 text-6xl font-bold leading-none md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Building Digital</span>
            <br />
            <span className="text-gradient-purple">
              Experiences That
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Actually Work
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-xl text-gray-400 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Modern web & AI solutions for ambitious companies
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="group rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 text-lg text-white hover:from-purple-700 hover:to-pink-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/10 bg-white/5 px-8 py-6 text-lg text-white backdrop-blur-md hover:bg-white/10"
            >
              View Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4" />
              <span>Trusted by 50+ companies</span>
            </div>

            {/* Company Logos Placeholder */}
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-12 w-24 rounded-lg border border-white/10 bg-white/5"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-white/50" />
      </motion.div>
    </section>
  );
}
