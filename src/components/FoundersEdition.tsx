import { motion } from "framer-motion";

const abilities = ["Attention.", "Presence.", "Conversation.", "Reading.", "Wonder."];

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
        <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-tight">The First Edition</h2>

        <div className="space-y-5 text-muted-foreground font-light text-lg mb-10 leading-relaxed">
          <p>We believe some things are worth preserving.</p>
          <p>Not paintings.</p>
          <p>Not artifacts.</p>
          <p className="text-foreground/90">Human abilities.</p>
        </div>

        <p className="text-muted-foreground font-light text-lg leading-relaxed mb-8">
          The first edition of The Human Archive is currently being assembled.
        </p>

        <p className="text-muted-foreground font-light text-base leading-relaxed mb-6">
          A physical collection documenting the abilities many of us feel slipping away:
        </p>

        <ul className="mb-10 space-y-2">
          {abilities.map((ability, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="font-serif text-xl text-foreground/80 tracking-wide"
              data-testid={`ability-item-${i}`}
            >
              {ability}
            </motion.li>
          ))}
        </ul>

        <p className="text-muted-foreground/60 font-light text-sm mb-10 leading-relaxed border-l border-primary/30 pl-4">
          Reserved exclusively for the earliest members of STIICE.
        </p>

        <a
          href="#waitlist"
          className="inline-block px-8 py-4 border-b border-primary text-primary hover:text-foreground hover:border-foreground transition-all duration-500 uppercase tracking-widest text-sm"
          data-testid="link-join-founders"
        >
          Join the Founders List
        </a>
      </motion.div>
    </section>
  );
}
