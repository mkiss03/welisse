"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink, Play, ArrowRight, Check } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "Minden" },
    { id: "weboldal", label: "Weboldal" },
    { id: "szoftver", label: "Szoftver" },
    { id: "ai", label: "AI Projekt" },
    { id: "ecommerce", label: "E-commerce" },
  ];

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(filter));

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#0A0A0A] py-32">
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
            <span className="text-white">Kiemelt </span>
            <span className="text-gradient-purple">Projektek</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Valós eredmények, mérhető siker
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-purple-500/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Staggered Layout */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const gradients = [
              "from-cyan-500 to-blue-600",
              "from-purple-500 to-pink-600",
              "from-orange-500 to-red-600",
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div
                  className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Image/Mockup */}
                  <div
                    className={`relative ${isReversed ? "lg:order-2" : ""}`}
                  >
                    <Card className="group relative overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/20">
                      {/* Gradient Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                      />

                      {/* Project Thumbnail */}
                      <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                        <div className="flex h-full items-center justify-center">
                          {/* Placeholder for actual project image */}
                          <div
                            className={`h-full w-full rounded-xl bg-gradient-to-br ${gradient} opacity-20`}
                          />
                          {project.featured && (
                            <div className="absolute right-6 top-6">
                              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                Kiemelt
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Project Details */}
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <motion.div
                      initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    >
                      {/* Category Badges */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.category.map((cat) => (
                          <Badge
                            key={cat}
                            className={`rounded-full border border-white/10 bg-gradient-to-r ${gradient} bg-clip-text text-xs font-medium text-transparent`}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-6 text-lg leading-relaxed text-gray-400">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      {project.results && (
                        <div className="mb-6 space-y-3">
                          {project.results.map((result, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 text-sm text-gray-300"
                            >
                              <div
                                className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${gradient}`}
                              >
                                <Check className="h-3 w-3 text-white" />
                              </div>
                              {result}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Features */}
                      {project.features && (
                        <div className="mb-6 space-y-3">
                          {project.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 text-sm text-gray-300"
                            >
                              <div
                                className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${gradient}`}
                              />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Weboldal Megtekintése
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 rounded-full border-2 border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:border-cyan-500/50 hover:bg-white/10"
                          >
                            <Play className="h-4 w-4" />
                            Demó Kipróbálása
                          </a>
                        )}
                      </div>
                    </motion.div>
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
