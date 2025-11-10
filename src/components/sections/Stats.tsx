"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";
import { TrendingUp, Zap, Users, Clock } from "lucide-react";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  const icons = [TrendingUp, Zap, Users, Clock];
  const gradients = [
    "from-cyan-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-orange-500 to-red-600",
    "from-green-500 to-emerald-600",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32">
      {/* Gradient Orbs */}
      <div className="absolute left-1/4 top-0 h-96 w-96 bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-cyan-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="text-white">Proven </span>
            <span className="text-gradient-purple">Results</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat, index) => {
            const Icon = icons[index];
            const gradient = gradients[index];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20"
              >
                {/* Gradient Glow (Hover Effect) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <div
                    className={`mb-3 bg-gradient-to-r ${gradient} bg-clip-text text-5xl font-bold text-transparent md:text-6xl`}
                  >
                    <Counter end={stat.value} />
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-medium text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
