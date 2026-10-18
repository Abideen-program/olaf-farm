"use client";

import { useActionState } from "react";
import * as Select from "@radix-ui/react-select";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Loader2 } from "lucide-react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";
import { INTERESTS } from "@/lib/validators";

const initial: WaitlistState = { ok: false, message: "" };
const box =
  "w-full rounded-2xl border border-white/15 bg-white/[0.06] text-paper-50 outline-none transition duration-300 " +
  "hover:border-white/30 focus:border-lime-300/70 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(182,227,107,0.12)]";

export function Field({ name, label, type = "text", autoComplete, required }: { name: string; label: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <div className="relative">
      <input id={name} name={name} type={type} autoComplete={autoComplete} required={required} placeholder=" " className={`${box} peer h-16 px-5 pt-5 text-base`} />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-paper-50/55 transition-all duration-300
          peer-focus:top-3.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-lime-300
          peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

function Success({ message }: { message: string }) {
  return (
    <div role="status" className="flex flex-col items-start gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
      <motion.svg viewBox="0 0 52 52" className="h-16 w-16" aria-hidden>
        <motion.circle cx="26" cy="26" r="24" fill="none" stroke="#B6E36B" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
        <motion.path d="M15 27l8 8 14-16" fill="none" stroke="#B6E36B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
      </motion.svg>
      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }} className="font-display text-3xl text-paper-50">
        {message}
      </motion.p>
    </div>
  );
}

export default function WaitlistForm() {
  const [state, action, pending] = useActionState(joinWaitlist, initial);
  if (state.ok) return <Success message={state.message} />;

  return (
    <form action={action} noValidate className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
      <Field name="name" label="Name (optional)" autoComplete="name" />
      <Field name="contact" label="Email or WhatsApp number" autoComplete="email" required />

      <Select.Root name="interest" defaultValue="Everything" required>
        <div className="relative">
          <span className="pointer-events-none absolute left-5 top-3.5 z-10 text-xs text-paper-50/55">I am interested in</span>
          <Select.Trigger className={`${box} group flex h-16 items-end justify-between px-5 pb-2.5 text-left text-base data-[state=open]:border-lime-300/70`} aria-label="What are you interested in?">
            <Select.Value />
            <Select.Icon>
              <ChevronDown className="h-5 w-5 text-paper-50/60 transition duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-lime-300" />
            </Select.Icon>
          </Select.Trigger>
        </div>
        <Select.Portal>
          <Select.Content position="popper" sideOffset={8} className="select-content z-[60] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-2xl border border-white/10 bg-forest-900/95 p-1.5 text-paper-50 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <Select.Viewport>
              {INTERESTS.map((i) => (
                <Select.Item key={i} value={i} className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 outline-none transition-colors data-[highlighted]:bg-lime-300/15 data-[highlighted]:text-lime-300">
                  <Select.ItemText>{i}</Select.ItemText>
                  <Select.ItemIndicator><Check className="h-4 w-4" /></Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <motion.button type="submit" disabled={pending} whileTap={{ scale: 0.98 }}
        className="group mt-2 flex h-16 items-center justify-center gap-3 rounded-2xl bg-lime-300 text-base font-medium text-forest-900 transition hover:bg-paper-50 disabled:opacity-70">
        {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
        {pending ? "Saving" : "Join the waitlist"}
        {!pending && <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />}
      </motion.button>

      <AnimatePresence>
        {state.message && !state.ok && (
          <motion.p role="alert" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-lime-300">
            {state.message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
