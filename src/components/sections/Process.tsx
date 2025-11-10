"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="rolunk" className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4">Folyamat</Badge>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Hogyan Dolgozunk?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Átlátható, strukturált folyamat az ötlettől a sikeres launch-ig
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary to-secondary md:block" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="flex-1">
                  <Card className="border-2 hover:border-primary hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary">
                            Step {step.step}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {step.description.map((desc, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary">✓</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Step Number (center) */}
                <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-2xl font-bold text-white">
                  {step.step}
                </div>

                {/* Spacer */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
