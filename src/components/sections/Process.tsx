"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PROCESS_STEPS } from "@/lib/constants";
import { Search, Palette, Code2, TestTube, Rocket, Wrench, Check } from "lucide-react";

export default function Process() {
  const icons = [Search, Palette, Code2, TestTube, Rocket, Wrench];
  const gradients = [
    "from-cyan-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-orange-500 to-red-600",
    "from-green-500 to-emerald-600",
    "from-yellow-500 to-orange-600",
    "from-pink-500 to-rose-600",
  ];

  return (
    <section id="rolunk" className="relative overflow-hidden bg-[#0A0A0A] py-32">
      {/* Grid Background */}
      <div className="grid-background absolute inset-0 opacity-20" />

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
            <span className="text-white">A </span>
            <span className="text-gradient-purple">Folyamatunk</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Átlátható, strukturált folyamat az ötlettől a sikeres indulásig
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30 md:block" />

          <div className="space-y-16">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = icons[index];
              const gradient = gradients[index];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`flex items-center gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Card */}
                    <div className="flex-1">
                      <Card className="group relative overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20">
                        {/* Gradient Glow */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
                        />

                        <CardContent className="relative z-10 p-0">
                          {/* Header */}
                          <div className="mb-6 flex items-center gap-4">
                            <div
                              className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} transition-transform duration-300 group-hover:scale-110`}
                            >
                              <Icon className="h-7 w-7 text-white" />
                            </div>
                            <div>
                              <div
                                className={`bg-gradient-to-r ${gradient} bg-clip-text text-sm font-medium text-transparent`}
                              >
                                Step {step.step}
                              </div>
                              <h3 className="text-2xl font-bold text-white">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          {/* Description List */}
                          <ul className="space-y-3">
                            {step.description.map((desc, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm text-gray-300"
                              >
                                <div
                                  className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${gradient}`}
                                >
                                  <Check className="h-3 w-3 text-white" />
                                </div>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Step Number Circle (center) */}
                    <div
                      className={`relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-[#0A0A0A] bg-gradient-to-br ${gradient} text-2xl font-bold text-white shadow-lg`}
                    >
                      {step.step}
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
