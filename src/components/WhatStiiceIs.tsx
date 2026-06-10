import { motion } from "framer-motion";

export function WhatStiiceIs() {
  return (
    <section className="py-32 md:py-48 px-6 w-full flex flex-col items-center border-t border-primary/10">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs uppercase tracking-widest text-primary/50 mb-10">What STIICE Is</p>
          <div className="w-8 h-[1px] bg-primary/30 mb-14" />

          <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-10">
            STIICE is a private archive documenting human abilities that appear to be fading in the digital age.
          </p>

          <div className="space-y-5">
            <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Not to mourn them.
            </p>
            <p className="font-serif text-xl md:text-2xl text-foreground/70 leading-relaxed">
              To practice them again.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
