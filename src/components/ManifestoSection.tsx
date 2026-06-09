import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <>
      {/* THE OBSERVATION */}
      <section className="py-32 md:py-48 px-6 relative w-full flex flex-col items-center">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-widest text-primary/60 mb-10">The Observation</p>
            <div className="w-8 h-[1px] bg-primary/40 mb-16" />

            <div className="space-y-6 font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/80">
              <p>For most of human history, boredom was normal.</p>
              <p>Silence was normal.</p>
              <p>Long conversations were normal.</p>
              <p>Reading for hours was normal.</p>
              <p>Walking without headphones was normal.</p>
              <p>Being alone with your thoughts was normal.</p>
            </div>

            <div className="w-8 h-[1px] bg-primary/20 my-16" />

            <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Then, in less than twenty years, everything changed.
            </p>
            <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed mt-8">
              We became more connected than any generation before us.
              And somehow, many of us began feeling further away from ourselves.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full mt-24 aspect-[16/9] overflow-hidden"
          >
            <img
              src="/manifesto-room.png"
              alt="A dimly lit, quiet reading room"
              className="w-full h-full object-cover opacity-70"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="py-24 md:py-40 px-6 w-full flex flex-col items-center border-t border-primary/10">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-widest text-primary/60 mb-10">Why This Exists</p>
            <div className="w-8 h-[1px] bg-primary/40 mb-16" />

            <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-10">
              This is not a movement against technology.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-16">
              It is a movement for humanity.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-6">
              Technology solved many problems.
              But in solving them, we may have forgotten something important.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              The Lost Arts exists to document, preserve, and rediscover the human abilities that once felt natural — before attention became a product.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
