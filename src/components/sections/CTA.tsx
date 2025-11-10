"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32">
      {/* Gradient Orbs */}
      <div className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 bg-purple-600/30 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 h-96 w-96 -translate-y-1/2 bg-pink-600/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-12 backdrop-blur-xl md:p-16"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-600/20" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              <span className="text-white">Készen Állsz </span>
              <span className="text-gradient-purple">az Indulásra?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
              Beszéljük meg a projektedet egy ingyenes konzultáción
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="group/btn rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 text-lg font-medium text-white transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
              >
                <a href="#kapcsolat">
                  <Calendar className="mr-2 h-5 w-5" />
                  Ingyenes Konzultáció Foglalása
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group/btn rounded-full border-2 border-white/20 bg-white/5 px-8 py-6 text-lg font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
              >
                <a href="mailto:info@welisse.hu">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Küldése
                </a>
              </Button>
            </div>

            {/* Response Time Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-400"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span>Általában 24 órán belül válaszolunk</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
