import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SubmissionState = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const receives = [
  "New archive entries",
  "Research and observations",
  "Reflections on attention, boredom, solitude, reading, conversation, and presence",
  "Early access to The Human Archive",
  "First access to future physical releases",
];

export function WaitlistSection() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    const payload = {
      name,
      email,
      source: "stiice-human-archive-landing-page",
      submittedAt: new Date().toISOString(),
    };

    const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Waitlist endpoint failed");
        }
      } else {
        const saved = JSON.parse(localStorage.getItem("stiice-waitlist") || "[]");
        saved.push(payload);
        localStorage.setItem("stiice-waitlist", JSON.stringify(saved));
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  const isSubmitted = status === "success";

  return (
    <section id="waitlist" className="py-40 px-6 w-full flex flex-col items-center bg-card/20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="flex flex-col md:flex-row md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 mb-16 md:mb-0"
          >
            <p className="text-xs uppercase tracking-widest text-primary/60 mb-8">Join the Archive</p>
            <div className="w-8 h-[1px] bg-primary/40 mb-10" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Join The Archive
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-12 text-base md:text-lg max-w-sm">
              Join STIICE and receive early access to new archive entries, research, observations, and future releases.
            </p>

            <p className="text-xs uppercase tracking-widest text-primary/50 mb-6">You'll receive</p>
            <ul className="space-y-4">
              {receives.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground font-light leading-relaxed"
                  data-testid={`receive-item-${i}`}
                >
                  <span className="text-primary/50 mt-[3px] shrink-0">—</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 pt-10 border-t border-primary/10">
              <p className="text-sm text-muted-foreground/60 font-light">No spam. No noise.</p>
              <p className="text-sm text-muted-foreground/60 font-light">One thoughtful email at a time.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full"
          >
            <div className="min-h-[280px] flex items-start">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={onSubmit}
                    className="w-full space-y-6"
                  >
                    <div className="flex flex-col">
                      <label className="sr-only" htmlFor="waitlist-name">First name</label>
                      <input
                        id="waitlist-name"
                        name="name"
                        placeholder="First Name (Optional)"
                        autoComplete="given-name"
                        className="bg-transparent border-b border-card-border py-4 px-2 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 font-light placeholder:text-muted-foreground/40 text-base"
                        data-testid="input-waitlist-name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="sr-only" htmlFor="waitlist-email">Email address</label>
                      <input
                        id="waitlist-email"
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        autoComplete="email"
                        required
                        className="bg-transparent border-b border-card-border py-4 px-2 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 font-light placeholder:text-muted-foreground/40 text-base"
                        data-testid="input-waitlist-email"
                      />
                    </div>

                    {error && <p className="text-destructive text-sm font-light">{error}</p>}

                    <div className="pt-4 space-y-4">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 uppercase tracking-widest text-sm disabled:opacity-50"
                        data-testid="button-join-archive"
                      >
                        {status === "submitting" ? "Joining..." : "Join The Archive"}
                      </button>
                      <p className="text-center text-xs text-muted-foreground/40 font-light tracking-wide">
                        For people who feel that something human is being forgotten.
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full border border-primary/20 p-12 bg-card/30"
                  >
                    <p className="text-xs uppercase tracking-widest text-primary/60 mb-6">Access Requested</p>
                    <h3 className="font-serif text-2xl text-foreground mb-4">Your name has been received.</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      We will reach out when the archive opens.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
