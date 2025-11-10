"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Név *
        </label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Teljes neved"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email *
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="email@example.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Telefon (opcionális)
        </label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="+36 XX XXX XXXX"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Milyen projekt? *
        </label>
        <select
          id="projectType"
          {...register("projectType")}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isSubmitting}
        >
          <option value="">Válassz...</option>
          <option value="weboldal">Weboldal</option>
          <option value="szoftver">Egyedi szoftver</option>
          <option value="ai">AI integráció</option>
          <option value="egyeb">Egyéb</option>
        </select>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-500">
            {errors.projectType.message}
          </p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label
          htmlFor="budget"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Költségkeret *
        </label>
        <select
          id="budget"
          {...register("budget")}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isSubmitting}
        >
          <option value="">Válassz...</option>
          <option value="<500k">{"< 500k Ft"}</option>
          <option value="500k-1M">500k - 1M Ft</option>
          <option value="1M-2M">1M - 2M Ft</option>
          <option value="2M+">2M+ Ft</option>
          <option value="nemtudom">Még nem tudom</option>
        </select>
        {errors.budget && (
          <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Üzenet *
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Írd le a projekted részleteit... (min. 50 karakter)"
          rows={6}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* GDPR Checkbox */}
      <div className="flex items-start gap-2">
        <input
          id="gdprAccepted"
          type="checkbox"
          {...register("gdprAccepted")}
          className="mt-1 h-4 w-4 rounded border-gray-300"
          disabled={isSubmitting}
        />
        <label htmlFor="gdprAccepted" className="text-sm text-gray-600">
          Elfogadom az{" "}
          <a href="/adatkezeles" className="text-primary hover:underline">
            adatkezelési tájékoztatót
          </a>{" "}
          *
        </label>
      </div>
      {errors.gdprAccepted && (
        <p className="text-sm text-red-500">{errors.gdprAccepted.message}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="gradient-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Küldés...
          </>
        ) : (
          "Üzenet Küldése"
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-2 rounded-md bg-green-50 p-4 text-green-800">
          <CheckCircle className="h-5 w-5" />
          <span className="text-sm font-medium">
            Köszönjük! Hamarosan jelentkezünk (24 órán belül).
          </span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-2 rounded-md bg-red-50 p-4 text-red-800">
          <XCircle className="h-5 w-5" />
          <span className="text-sm font-medium">
            Hiba történt. Próbáld újra vagy írj nekünk: info@welisse.hu
          </span>
        </div>
      )}
    </form>
  );
}
