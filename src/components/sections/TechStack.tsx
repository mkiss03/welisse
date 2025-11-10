"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { TECH_STACK } from "@/lib/constants";

export default function TechStack() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4">Technológiák</Badge>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Tech Stack, Amikkel Dolgozunk
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A legmodernebb és legmegbízhatóbb technológiák
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-4 text-xl font-bold">Frontend</h3>
            <div className="space-y-3">
              {TECH_STACK.frontend.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-md bg-muted/50 p-2 transition-colors hover:bg-primary/10"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-4 text-xl font-bold">Backend</h3>
            <div className="space-y-3">
              {TECH_STACK.backend.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-md bg-muted/50 p-2 transition-colors hover:bg-primary/10"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI & ML */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-4 text-xl font-bold">AI & ML</h3>
            <div className="space-y-3">
              {TECH_STACK.ai.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-md bg-muted/50 p-2 transition-colors hover:bg-primary/10"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-4 text-xl font-bold">DevOps & Cloud</h3>
            <div className="space-y-3">
              {TECH_STACK.devops.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-md bg-muted/50 p-2 transition-colors hover:bg-primary/10"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
