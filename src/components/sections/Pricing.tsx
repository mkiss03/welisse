"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/constants";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function Pricing() {
  const gradients = [
    "from-cyan-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-orange-500 to-red-600",
  ];

  return (
    <section id="arazas" className="relative overflow-hidden bg-[#0A0A0A] py-32">
      {/* Grid Background */}
      <div className="grid-background absolute inset-0 opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute left-0 top-1/4 h-96 w-96 bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 bg-cyan-600/20 blur-3xl" />

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
            <span className="text-white">Átlátható </span>
            <span className="text-gradient-purple">Árazás</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Válaszd ki a hozzád illő csomagot
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PRICING_TIERS.map((tier, index) => {
            const gradient = gradients[index % gradients.length];

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${tier.featured ? "md:-mt-4 md:scale-105" : ""}`}
              >
                {/* Featured Badge */}
                {tier.featured && (
                  <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                    <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 text-sm font-medium text-white shadow-lg">
                      <Sparkles className="h-4 w-4" />
                      LEGNÉPSZERŰBB
                    </div>
                  </div>
                )}

                <Card
                  className={`group relative h-full overflow-hidden rounded-3xl border-2 ${
                    tier.featured ? "border-purple-500/50" : "border-white/10"
                  } bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20`}
                >
                  {/* Gradient Glow (Hover Effect) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-opacity duration-500 ${
                      tier.featured ? "opacity-5" : ""
                    } group-hover:opacity-10`}
                  />

                  <CardContent className="relative z-10 p-0">
                    {/* Header */}
                    <div className="mb-8 text-center">
                      <h3 className="mb-2 text-2xl font-bold text-white">
                        {tier.name}
                      </h3>
                      <p className="mb-4 text-sm text-gray-400">
                        {tier.description}
                      </p>
                      <div
                        className={`bg-gradient-to-r ${gradient} bg-clip-text text-5xl font-bold text-transparent`}
                      >
                        {tier.price}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="mb-8 space-y-4">
                      {tier.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <div
                            className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${gradient}`}
                          >
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className={`group/btn w-full rounded-full py-6 text-base font-medium transition-all ${
                        tier.featured
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
                          : "border-2 border-white/10 bg-white/5 text-white hover:border-cyan-500/50 hover:bg-white/10"
                      }`}
                    >
                      <a href="#kapcsolat">
                        {tier.cta}
                        <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400">
            Nem találod a megfelelő csomagot?{" "}
            <a
              href="#kapcsolat"
              className="font-medium text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:from-purple-300 hover:to-pink-300"
            >
              Kérj egyedi ajánlatot!
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
