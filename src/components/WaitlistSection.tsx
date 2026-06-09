import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SubmissionState = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      source: "the-lost-arts-landing-page",
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
        const saved = JSON.parse(localStorage.getItem("lost-arts-waitlist") || "[]");
        saved.push(payload);
        localStorage.setItem("lost-arts-waitlist", JSON.stringify(saved));
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

      <div className="max-w-xl w-full relative z-10 text-center">
        <p className="text-xs uppercase tracking-widest text-primary/60 mb-6">Private Waitlist</p>
        <h2 className="font-serif text-4xl md:text-6xl mb-6">Be first to enter the archive.</h2>
        <p className="text-muted-foreground font-light mb-10 max-w-md mx-auto">
          Join the early list to receive launch access, founder updates, and the first release of The Lost Arts.
        </p>
        <div className="w-12 h-[1px] bg-primary mx-auto mb-16" />

        <div className="min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onSubmit={onSubmit}
                className="w-full space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col text-left">
                    <label className="sr-only" htmlFor="waitlist-name">First name</label>
                    <input
                      id="waitlist-name"
                      name="name"
                      placeholder="First Name (Optional)"
                      autoComplete="given-name"
                      className="bg-transparent border-b border-card-border py-3 px-2 text-foreground focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground/50"
                      data-testid="input-waitlist-name"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="sr-only" htmlFor="waitlist-email">Email address</label>
                    <input
                      id="waitlist-email"
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      autoComplete="email"
                      required
                      className="bg-transparent border-b border-card-border py-3 px-2 text-foreground focus:outline-none focus:border-primary transition-colors font-light placeholder:text-muted-foreground/50"
                      data-testid="input-waitlist-email"
                    />
                  </div>
                </div>

                {error && <p className="text-destructive text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-8 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium disabled:opacity-50"
                  data-testid="button-request-access"
                >
                  {status === "submitting" ? "Requesting Access..." : "Request Access"}
                </button>

                <p className="text-xs text-muted-foreground/60 font-light">
                  No spam. Used only to validate interest and share launch updates.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center border border-primary/20 p-12 bg-card/30"
              >
                <h3 className="font-serif text-2xl text-primary mb-4">Your name has been received.</h3>
                <p className="text-muted-foreground font-light">We will reach out when the archive opens.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
