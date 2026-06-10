import { motion } from "framer-motion";

export function FoundersEdition() {
  return (
    <section className="py-32 px-6 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <motion.div
        className="flex-1 w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/founders-deck.png"
          alt="The Human Archive — First Edition"
          className="w-full h-full object-cover opacity-90"
        />
      </motion.div>

      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-xs uppercase tracking-widest text-primary/50 mb-8">The Human Archive</p>
        <div className="w-8 h-[1px] bg-primary/40 mb-10" />
        <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-tight">The First Archive</h2>

        <div className="space-y-5 text-muted-foreground font-light text-lg mb-10 leading-relaxed">
          <p>We believe some things are worth preserving.</p>
          <p>Not paintings.<br />Not artifacts.</p>
          <p className="text-foreground/80 font-serif italic">Human abilities.</p>
        </div>

        <p className="text-muted-foreground font-light text-base leading-relaxed mb-4">
          The first physical archive is currently being assembled.
        </p>
        <p className="text-muted-foreground/60 font-light text-sm mb-12 border-l border-primary/30 pl-4">
          Reserved for the earliest members of STIICE.
        </p>

        <a
          href="#waitlist"
          className="inline-block px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 uppercase tracking-widest text-sm"
          data-testid="link-join-circle-founders"
        >
          Join The Circle
        </a>
      </motion.div>
    </section>
  );
}
