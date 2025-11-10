"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Sparkles, Boxes, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Webfejlesztés",
    subtitle: "Enterprise-Grade Teljesítmény",
    description:
      "Pixelpontos React/Next.js alkalmazások production-ready kódbázissal és 95+ PageSpeed Score-ral. Olyan digitális élményeket építünk, amelyek konvertálnak, skálázódnak és hosszú távon fenntarthatók.",
    features: [
      "React / Next.js / TypeScript",
      "E-commerce Platformok",
      "Progressive Web Apps (PWA)",
      "SEO és Core Web Vitals",
    ],
    gradient: "from-cyan-500 to-blue-600",
    size: "large",
  },
  {
    icon: Boxes,
    title: "Egyedi Szoftver",
    subtitle: "Skálázható Üzleti Megoldások",
    description:
      "Vállalati szintű CRM, ERP és admin rendszerek, amelyek az üzleti folyamataidhoz igazodnak. Mikroszervíz architektúra, API-first development és modern tech stack.",
    features: [
      "CRM/ERP Rendszerek",
      "Admin & Analytics Dashboard",
      "REST/GraphQL API Fejlesztés",
      "Adatbázis Architektúra",
    ],
    gradient: "from-purple-500 to-pink-600",
    size: "medium",
  },
  {
    icon: Sparkles,
    title: "AI Integráció",
    subtitle: "LLM-Powered Automatizáció",
    description:
      "GPT-4 és Claude alapú intelligens megoldások production környezetre optimalizálva. RAG pipeline, egyedi fine-tuning és etikus AI implementáció.",
    features: [
      "AI Chatbot & Ügyfélszolgálat",
      "Dokumentum Feldolgozás (OCR)",
      "Email & Workflow Automatizáció",
      "Egyedi LLM Modellek & RAG",
    ],
    gradient: "from-orange-500 to-red-600",
    size: "medium",
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="relative overflow-hidden bg-[#0A0A0A] py-32">
      {/* Grid Background */}
      <div className="grid-background absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-white">Amit </span>
            <span className="text-gradient-purple">Építünk</span>
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-lg text-gray-400 sm:text-xl">
            Full-stack szoftverfejlesztés és AI integráció production-ready minőségben
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${service.size === "large" ? "md:col-span-2" : ""}`}
              >
                <Card
                  className={`group relative h-full overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20`}
                >
                  {/* Gradient Glow (Hover Effect) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <CardContent className="relative z-10 p-0">
                    {/* Icon */}
                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p
                      className={`mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-sm font-medium text-transparent`}
                    >
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mb-6 leading-relaxed text-gray-400">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <a
                      href="#kapcsolat"
                      className={`group/btn flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-transparent hover:bg-gradient-to-r ${service.gradient} hover:bg-clip-text`}
                    >
                      Többet
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
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
