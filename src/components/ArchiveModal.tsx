import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ModalSection = {
  label: string;
  lines: string[];
};

export type ArchiveEntry = {
  entry: string;
  title: string;
  classification: string;
  status: string;
  heroStatement: string | null;
  sections: ModalSection[];
};

export type ObservationEntry = {
  entry: string;
  title: string;
  classification: string;
  status: string;
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Full Archive Modal ───────────────────────────────────────────────────────

type FullProps = { entry: ArchiveEntry | null; onClose: () => void };

export function ArchiveModal({ entry, onClose }: FullProps) {
  useEffect(() => {
    if (!entry) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [entry, onClose]);

  return (
    <AnimatePresence>
      {entry && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-background/97 overflow-y-auto"
          onClick={onClose}
          data-testid="modal-backdrop"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-full max-w-3xl mx-auto px-6 md:px-16 py-20 md:py-28"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-6 md:right-0 text-xs uppercase tracking-widest text-muted-foreground/50 hover:text-primary transition-colors duration-300"
              data-testid="button-close-modal"
            >
              Close
            </button>

            <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-0">
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest text-primary/50 mb-8">
                Archive Entry {entry.entry}
              </motion.p>

              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-10">
                {entry.title}
              </motion.h2>

              <motion.div variants={fadeUp} className="flex gap-8 mb-14">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-1">Classification</p>
                  <p className="text-sm text-muted-foreground font-light">{entry.classification}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-1">Status</p>
                  <p className="text-sm text-primary font-light">{entry.status}</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="w-full h-[1px] bg-primary/20 mb-14" />

              {entry.heroStatement && (
                <motion.p variants={fadeUp} className="font-serif text-2xl md:text-3xl text-foreground/80 leading-relaxed mb-16">
                  {entry.heroStatement}
                </motion.p>
              )}

              {entry.sections.map((section, si) => (
                <motion.div key={si} variants={fadeUp} className="mb-14">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-4 h-[1px] bg-primary/40" />
                    <p className="text-xs uppercase tracking-widest text-primary/50">{section.label}</p>
                  </div>
                  <div className="space-y-5">
                    {section.lines.map((line, li) => (
                      <p key={li} className={line === "" ? "h-2 block" : "font-light leading-relaxed text-muted-foreground text-base md:text-lg"}>
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="w-full h-[1px] bg-primary/10 mt-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Under Observation Modal ──────────────────────────────────────────────────

type ObsProps = { entry: ObservationEntry | null; onClose: () => void };

export function ObservationModal({ entry, onClose }: ObsProps) {
  useEffect(() => {
    if (!entry) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [entry, onClose]);

  return (
    <AnimatePresence>
      {entry && (
        <motion.div
          key="obs-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={onClose}
          data-testid="obs-modal-backdrop"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-background border border-primary/15 p-10 md:p-14"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-xs uppercase tracking-widest text-muted-foreground/40 hover:text-primary transition-colors duration-300"
            >
              Close
            </button>

            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="space-y-0"
            >
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest text-primary/40 mb-6">
                Archive In Assembly
              </motion.p>

              <motion.div variants={fadeUp} className="w-6 h-[1px] bg-primary/30 mb-8" />

              <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-2">
                Archive Entry {entry.entry}
              </motion.p>

              <motion.h3 variants={fadeUp} className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-3">
                {entry.title}
              </motion.h3>

              <motion.div variants={fadeUp} className="flex gap-6 mb-10">
                <div>
                  <p className="text-xs text-muted-foreground/40">{entry.classification}</p>
                </div>
                <div className="w-[1px] bg-primary/10" />
                <div>
                  <p className="text-xs text-primary/60">{entry.status}</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="w-full h-[1px] bg-primary/10 mb-10" />

              <motion.p variants={fadeUp} className="text-muted-foreground font-light leading-relaxed mb-4 text-sm md:text-base">
                This record is currently being assembled.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground/60 font-light leading-relaxed mb-12 text-sm">
                Preliminary observations suggest that this human ability is becoming increasingly rare in a permanently connected world. Members of STIICE will receive access when the record opens.
              </motion.p>

              <motion.a
                variants={fadeUp}
                href="#waitlist"
                onClick={onClose}
                className="inline-block px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 uppercase tracking-widest text-xs"
                data-testid="button-obs-join"
              >
                Join The Circle
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
