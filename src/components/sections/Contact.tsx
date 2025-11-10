"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kapcsolat" className="relative overflow-hidden bg-[#0A0A0A] py-32">
      {/* Gradient Orbs */}
      <div className="absolute left-0 top-0 h-96 w-96 bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-pink-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="text-gradient-purple">Amazing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Tell us about your project and we&apos;ll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white">Get in Touch</h3>
              <p className="leading-relaxed text-gray-400">
                We&apos;re here to answer your questions and discuss your next project.
                Reach out through the form or contact us directly.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="mailto:info@welisse.hu"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-purple-500/50"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="mb-1 font-medium text-white">Email</p>
                  <p className="text-gray-400 transition-colors group-hover:text-purple-400">
                    info@welisse.hu
                  </p>
                </div>
              </a>

              <a
                href="tel:+36XXXXXXXXX"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-cyan-500/50"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="mb-1 font-medium text-white">Phone</p>
                  <p className="text-gray-400 transition-colors group-hover:text-cyan-400">
                    +36 XX XXX XXXX
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-red-600">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="mb-1 font-medium text-white">Location</p>
                  <p className="text-gray-400">Budapest, Hungary</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Name *
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-purple-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Email *
                  </label>
                  <Input
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-purple-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-400">
                  Phone (optional)
                </label>
                <Input
                  type="tel"
                  {...register("phone")}
                  placeholder="+36 20 123 4567"
                  disabled={isSubmitting}
                  className="border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              {/* Project Type & Budget */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Project Type
                  </label>
                  <select
                    {...register("projectType")}
                    disabled={isSubmitting}
                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-600 focus-visible:border-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select type</option>
                    <option value="weboldal">Weboldal</option>
                    <option value="szoftver">Egyedi Szoftver</option>
                    <option value="ai">AI Integráció</option>
                    <option value="egyeb">Egyéb</option>
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-400">{errors.projectType.message}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Budget
                  </label>
                  <select
                    {...register("budget")}
                    disabled={isSubmitting}
                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-600 focus-visible:border-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select budget</option>
                    <option value="<500k">&lt; 500k Ft</option>
                    <option value="500k-1M">500k - 1M Ft</option>
                    <option value="1M-2M">1M - 2M Ft</option>
                    <option value="2M+">2M+ Ft</option>
                    <option value="nemtudom">Még nem tudom</option>
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-400">{errors.budget.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-400">
                  Message *
                </label>
                <Textarea
                  {...register("message")}
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                  rows={6}
                  className="resize-none border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-purple-500"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* GDPR Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  id="gdprAccepted"
                  type="checkbox"
                  {...register("gdprAccepted")}
                  disabled={isSubmitting}
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="gdprAccepted" className="text-sm text-gray-400">
                  I accept the{" "}
                  <a href="/adatkezeles" className="text-purple-400 hover:underline">
                    privacy policy
                  </a>{" "}
                  *
                </label>
              </div>
              {errors.gdprAccepted && (
                <p className="text-sm text-red-400">{errors.gdprAccepted.message}</p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 py-6 text-lg font-medium text-white hover:from-purple-700 hover:to-pink-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Message sent! We&apos;ll get back to you within 24 hours.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
                  <XCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Something went wrong. Please try again or email us directly.
                  </span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
