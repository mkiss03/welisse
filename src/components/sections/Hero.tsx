"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Award, Lock, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="animate-gradient gradient-primary absolute inset-0 opacity-20" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[10%] top-[20%] text-6xl opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ⚛️
        </motion.div>
        <motion.div
          className="absolute right-[15%] top-[30%] text-5xl opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🤖
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[20%] text-4xl opacity-20"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💻
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] right-[10%] text-5xl opacity-20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ⚡
        </motion.div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
            🚀 Trusted by 50+ Companies
          </Badge>

          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Egyedi Web & AI
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Megoldások a Jövőnek
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Digitalizáljuk vállalkozásod modern technológiákkal - gyorsabban,
            biztonságosabban, skálázhatóan.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="xl" className="gradient-primary group">
              📅 Ingyenes Konzultáció
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="xl" variant="outline">
              💼 Portfolio
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col items-center gap-2">
              <Zap className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">95+ PageSpeed</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">100% Elégedettség</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Lock className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">Enterprise Biztonság</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">24/7 Support</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-12 w-8 rounded-full border-2 border-primary p-2">
          <motion.div
            className="h-2 w-2 rounded-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
