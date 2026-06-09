import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-archway.png"
          alt="Cinematic archway"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full p-6 md:p-12 flex justify-between items-center">
        <div className="font-serif text-lg md:text-xl tracking-widest text-primary uppercase">
          The Lost Arts
        </div>
        <a 
          href="#waitlist" 
          className="text-xs md:text-sm tracking-widest uppercase hover:text-primary transition-colors duration-500"
          data-testid="link-waitlist-nav"
        >
          Join the Waitlist
        </a>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Some human abilities<br className="hidden md:block" /> are disappearing.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-foreground/70 text-xl md:text-2xl mb-4 max-w-2xl font-serif font-light italic">
            Not because they are useless.
          </p>
          <p className="text-foreground/70 text-xl md:text-2xl mb-10 max-w-2xl font-serif font-light italic">
            Because they are no longer rewarded.
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-12 max-w-xl font-light tracking-wide leading-relaxed uppercase">
            A modern archive documenting the human abilities being forgotten in the age of endless noise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a
            href="#archive"
            className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 uppercase tracking-widest text-sm"
            data-testid="button-enter-archive"
          >
            Enter the Archive
          </a>
          <a
            href="#waitlist"
            className="px-8 py-4 border border-transparent text-foreground hover:text-primary transition-all duration-500 uppercase tracking-widest text-sm"
            data-testid="button-join-waitlist-hero"
          >
            Join the Waitlist
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="relative z-10 pb-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
