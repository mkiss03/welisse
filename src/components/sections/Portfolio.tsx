"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink, Play } from "lucide-react";

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
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4">Portfolio</Badge>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Kiemelt Projektek
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Valós eredmények, mérhető siker
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
              className="transition-all"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-2 transition-all hover:border-primary hover:shadow-xl">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="flex h-full items-center justify-center text-6xl">
                    {project.id === "hornetgarage" && "🚗"}
                    {project.id === "besthomes" && "🏠"}
                    {project.id === "vizvar" && "🏖️"}
                    {project.id === "minicrm" && "📊"}
                    {project.id === "flowOrchestrator" && "⚡"}
                    {project.id === "temetkezespro" && "🕊️"}
                  </div>
                  {project.featured && (
                    <Badge className="absolute right-4 top-4"> Featured</Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((cat) => (
                      <Badge key={cat} variant="secondary" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  {project.results && (
                    <div className="mb-4 space-y-1">
                      {project.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-green-500">✅</span>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  {project.features && (
                    <div className="mb-4 space-y-1">
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-primary">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="group/btn flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Élő Weboldal
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="gradient-primary flex-1"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Próbáld Ki
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
