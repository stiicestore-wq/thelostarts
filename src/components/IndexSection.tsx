import { motion } from "framer-motion";

export function IndexSection() {
  return (
    <section className="py-24 md:py-32 px-6 w-full border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-16"
        >
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-widest text-primary/60 mb-8">The Index</p>
            <div className="w-8 h-[1px] bg-primary/40 mb-10" />
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
              The Human Archive is maintained by STIICE.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              An ongoing effort to document human abilities that appear to be declining in the digital age.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Some are vulnerable.<br />
              Some are endangered.<br />
              Some may already be disappearing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 md:gap-16">
            {[
              { value: "12", label: "Archived Arts" },
              { value: "4",  label: "Classifications" },
              { value: "1",  label: "Mission" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1 }}
                className="text-center md:text-right"
                data-testid={`stat-index-${i}`}
              >
                <p className="font-serif text-5xl md:text-6xl text-primary mb-2">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
