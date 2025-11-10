"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="animate-gradient gradient-primary py-24 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Készen Állsz az Indulásra?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Beszéljük meg a projektedet egy ingyenes konzultáción
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Ingyenes Konzultáció Foglalása
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Küldése
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/80">
            ⚡ Általában 24 órán belül válaszolunk
          </p>
        </motion.div>
      </div>
    </section>
  );
}
