import { z } from "zod";

export const INTERESTS = ["Live rabbits", "Fresh or smoked meat", "Feed and hay", "Mentorship", "Everything"] as const;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isPhone = (v: string) => v.replace(/[^\d]/g, "").length >= 10;

export const waitlistSchema = z.object({
  name: z.string().trim().max(80, "Name is too long.").optional(),
  contact: z
    .string()
    .trim()
    .min(1, "Enter an email address or WhatsApp number.")
    .max(120)
    .refine((v) => isEmail(v) || isPhone(v), "Enter a valid email address or a WhatsApp number with at least 10 digits."),
  interest: z.enum(INTERESTS, { errorMap: () => ({ message: "Choose what you are interested in." }) }),
});
