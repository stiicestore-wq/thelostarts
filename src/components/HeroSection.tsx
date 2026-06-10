import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-archway.png"
          alt="Cinematic archway"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full p-6 md:p-12 flex justify-between items-center">
        <div className="font-serif text-lg md:text-xl tracking-widest text-primary uppercase">
          STIICE
        </div>
        <a
          href="#waitlist"
          className="text-xs md:text-sm tracking-widest uppercase hover:text-primary transition-colors duration-500"
          data-testid="link-join-nav"
        >
          Join The Circle
        </a>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-widest text-primary/50 mb-2">The Human Archive</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Some human abilities<br className="hidden md:block" /> are disappearing.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-foreground/60 text-xl md:text-2xl mb-3 font-serif font-light italic">
            Not because they are useless.
          </p>
          <p className="text-foreground/60 text-xl md:text-2xl mb-10 font-serif font-light italic">
            Because they are no longer rewarded.
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-14 max-w-md mx-auto font-light tracking-wide leading-relaxed">
            A private archive for the abilities we are forgetting in the digital age.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a
            href="#archive"
            className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 uppercase tracking-widest text-sm"
            data-testid="button-enter-archive"
          >
            Enter The Archive
          </a>
          <a
            href="#waitlist"
            className="px-8 py-4 border border-transparent text-foreground/70 hover:text-primary transition-all duration-500 uppercase tracking-widest text-sm"
            data-testid="button-join-circle"
          >
            Join The Circle
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
