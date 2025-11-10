"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/constants";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="arazas" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4">Árazás</Badge>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Transzparens Árazás
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Válaszd ki a neked megfelelő csomagot
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                  <Badge className="gradient-primary border-0 px-4 py-1">
                    ⭐ MOST POPULAR
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full border-2 transition-all hover:shadow-xl ${
                  tier.featured
                    ? "scale-105 border-primary shadow-lg"
                    : "hover:border-primary"
                }`}
              >
                <CardHeader className="text-center">
                  <div className="mb-4 text-6xl">{tier.icon}</div>
                  <CardTitle className="mb-2 text-2xl">{tier.name}</CardTitle>
                  <div className="mb-2 text-4xl font-bold text-primary">
                    {tier.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    size="lg"
                    className={`w-full ${
                      tier.featured ? "gradient-primary" : ""
                    }`}
                    variant={tier.featured ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground">
             Nem találod a megfelelő csomagot?{" "}
            <a href="#kapcsolat" className="font-medium text-primary hover:underline">
              Kérj egyedi ajánlatot!
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
