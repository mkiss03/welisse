"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32">
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
            <span className="text-white">Frequently Asked </span>
            <span className="text-gradient-purple">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Everything you need to know about projects and collaboration
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 data-[state=open]:border-purple-500/50"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-semibold text-white hover:no-underline [&[data-state=open]>svg]:text-purple-400">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                        <HelpCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="flex-1">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-400">
                    <div className="ml-14">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400">
            Still have questions?{" "}
            <a
              href="#kapcsolat"
              className="font-medium text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:from-purple-300 hover:to-pink-300"
            >
              Get in touch with us!
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
