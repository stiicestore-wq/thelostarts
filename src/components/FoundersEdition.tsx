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
          alt="Premium card deck with gold edges on dark marble" 
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
        <h2 className="font-serif text-4xl md:text-5xl mb-8">Founders Edition</h2>
        <div className="w-12 h-[1px] bg-primary mb-8" />
        
        <div className="space-y-6 text-muted-foreground font-light text-lg mb-12">
          <p>
            A limited physical deck is being created for the first members of The Lost Arts.
          </p>
          <p>
            Each set contains premium collectible cards inscribed with ritual prompts and reflections. Hidden among them are rare artifacts.
          </p>
          <p>
            Access to the first edition is reserved strictly for those on the private waitlist.
          </p>
        </div>

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
