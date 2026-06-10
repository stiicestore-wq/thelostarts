import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="py-40 md:py-56 px-6 w-full flex flex-col items-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
            We became connected<br /> to everything.
          </h2>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground/40 leading-tight mb-20">
            Except ourselves.
          </h2>

          <div className="w-8 h-[1px] bg-primary/30 mx-auto mb-16" />

          <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
            STIICE exists to document what is fading — and help people practice it again.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
