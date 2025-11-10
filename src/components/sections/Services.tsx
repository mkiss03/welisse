"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";
import { Globe, Code, Brain, ArrowRight } from "lucide-react";

const iconMap = {
  Globe: Globe,
  Code: Code,
  Brain: Brain,
};

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4">Szolgáltatások</Badge>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Mit Kínálunk?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Teljes körű webfejlesztési és AI integrációs szolgáltatások modern
            technológiákkal
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ perspective: 1000 }}
              >
                <Card className="group h-full cursor-pointer border-2 transition-all hover:border-primary hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mb-2 text-2xl">
                      {service.title} {service.icon === "Globe" && "🌐"}
                      {service.icon === "Code" && "💻"}
                      {service.icon === "Brain" && "🤖"}
                    </CardTitle>
                    <p className="text-sm font-medium text-primary">
                      {service.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2">
                      {service.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 text-primary">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <button className="group/btn flex items-center gap-2 text-sm font-medium text-primary">
                      Tudj meg többet
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
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
