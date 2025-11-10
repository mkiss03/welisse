import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "A név legalább 2 karakter legyen").max(100),
  email: z.string().email("Érvényes email címet adj meg"),
  phone: z.string().optional(),
  projectType: z.enum(["weboldal", "szoftver", "ai", "egyeb"], {
    required_error: "Válassz projekt típust",
  }),
  budget: z.enum(["<500k", "500k-1M", "1M-2M", "2M+", "nemtudom"], {
    required_error: "Válassz költségkeretet",
  }),
  message: z
    .string()
    .min(50, "Az üzenet legalább 50 karakter legyen")
    .max(2000),
  gdprAccepted: z.boolean().refine((val) => val === true, {
    message: "El kell fogadnod az adatkezelési tájékoztatót",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Érvényes email címet adj meg"),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
