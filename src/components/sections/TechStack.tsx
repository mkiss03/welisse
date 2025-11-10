"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import * as SimpleIcons from "react-icons/si";

export default function TechStack() {
  const categories = [
    { name: "Frontend", items: TECH_STACK.frontend, gradient: "from-cyan-500 to-blue-600" },
    { name: "Backend", items: TECH_STACK.backend, gradient: "from-purple-500 to-pink-600" },
    { name: "AI & ML", items: TECH_STACK.ai, gradient: "from-orange-500 to-red-600" },
    { name: "DevOps", items: TECH_STACK.devops, gradient: "from-green-500 to-emerald-600" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32">
      {/* Gradient Orbs */}
      <div className="absolute left-1/4 top-0 h-96 w-96 bg-cyan-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-purple-600/10 blur-3xl" />

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
            <span className="text-white">Tech </span>
            <span className="text-gradient-purple">Stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            The most modern and reliable technologies
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20"
            >
              {/* Gradient Glow (Hover Effect) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
              />

              {/* Category Title */}
              <div className="relative z-10 mb-6">
                <h3
                  className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-xl font-bold text-transparent`}
                >
                  {category.name}
                </h3>
              </div>

              {/* Tech Items */}
              <div className="relative z-10 space-y-4">
                {category.items.map((tech, techIndex) => {
                  // Dynamically get the icon component
                  const IconComponent = (SimpleIcons as any)[tech.icon];

                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + techIndex * 0.05,
                      }}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      {IconComponent && (
                        <div
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${category.gradient}`}
                        >
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
