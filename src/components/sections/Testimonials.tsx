"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const gradients = [
    "from-cyan-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-orange-500 to-red-600",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32">
      {/* Gradient Orbs */}
      <div className="absolute left-0 top-0 h-96 w-96 bg-cyan-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-purple-600/20 blur-3xl" />

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
            <span className="text-white">Ügyfeleink </span>
            <span className="text-gradient-purple">Véleménye</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            100% ügyfél elégedettség - valós visszajelzések
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => {
            const gradient = gradients[index % gradients.length];

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20">
                  {/* Gradient Glow (Hover Effect) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
                  />

                  <CardContent className="relative z-10 p-0">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
                      >
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="mb-6 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="mb-8 leading-relaxed text-gray-300">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div
                        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-lg font-bold text-white`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>

                      {/* Name & Role */}
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
