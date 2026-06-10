import { motion } from "framer-motion";

type StatusLevel = "Critically Endangered" | "Endangered" | "Threatened" | "Vulnerable";

const arts: {
  entry: string;
  title: string;
  classification: string;
  status: StatusLevel;
  observation: string;
  whatIsLost: string;
}[] = [
  {
    entry: "#001",
    title: "The Art of Attention",
    classification: "Cognitive Art",
    status: "Critically Endangered",
    observation: "Your attention is now one of the most valuable resources on Earth.",
    whatIsLost: "The ability to choose where your mind goes.",
  },
  {
    entry: "#002",
    title: "The Art of Boredom",
    classification: "Solitary Art",
    status: "Critically Endangered",
    observation: "Every empty moment is now filled before it has a chance to become anything.",
    whatIsLost: "The quiet space where original thoughts begin.",
  },
  {
    entry: "#003",
    title: "The Art of Solitude",
    classification: "Solitary Art",
    status: "Threatened",
    observation: "We are rarely alone anymore. Even when no one is near us, the world is still reaching in.",
    whatIsLost: "The ability to be alone without trying to escape yourself.",
  },
  {
    entry: "#004",
    title: "The Art of Deep Reading",
    classification: "Cognitive Art",
    status: "Threatened",
    observation: "We read more words than ever, but fewer of them stay with us.",
    whatIsLost: "The ability to remain with one thought long enough to be changed by it.",
  },
  {
    entry: "#005",
    title: "The Art of Conversation",
    classification: "Relational Art",
    status: "Threatened",
    observation: "Communication became instant. Understanding did not.",
    whatIsLost: "The ability to meet another person without performing.",
  },
  {
    entry: "#006",
    title: "The Art of Listening",
    classification: "Relational Art",
    status: "Threatened",
    observation: "Many people listen only long enough to prepare their own response.",
    whatIsLost: "The ability to give another human being your full attention.",
  },
  {
    entry: "#007",
    title: "The Art of Presence",
    classification: "Presence Art",
    status: "Threatened",
    observation: "The body is here. The mind is somewhere else.",
    whatIsLost: "The ability to experience a moment before it becomes a memory.",
  },
  {
    entry: "#008",
    title: "The Art of Observation",
    classification: "Presence Art",
    status: "Vulnerable",
    observation: "The world did not become less interesting. We became easier to distract.",
    whatIsLost: "The ability to notice what is already around you.",
  },
  {
    entry: "#009",
    title: "The Art of Reflection",
    classification: "Cognitive Art",
    status: "Threatened",
    observation: "We react faster than ever, but reflect less than ever.",
    whatIsLost: "The ability to understand your own life while you are living it.",
  },
  {
    entry: "#010",
    title: "The Art of Waiting",
    classification: "Temporal Art",
    status: "Endangered",
    observation: "Almost everything became immediate. The human nervous system did not.",
    whatIsLost: "The ability to let time pass without needing to fill it.",
  },
  {
    entry: "#011",
    title: "The Art of Walking",
    classification: "Solitary Art",
    status: "Vulnerable",
    observation: "Walking was once a place for thought. Now it is often just movement between distractions.",
    whatIsLost: "The ability to think at the speed of the body.",
  },
  {
    entry: "#012",
    title: "The Art of Wonder",
    classification: "Presence Art",
    status: "Critically Endangered",
    observation: "When everything is available, almost nothing feels rare.",
    whatIsLost: "The ability to be astonished by the ordinary.",
  },
];

const statusStyle: Record<StatusLevel, string> = {
  "Critically Endangered": "text-primary border-primary/50",
  "Endangered":            "text-foreground/70 border-foreground/30",
  "Threatened":            "text-foreground/60 border-foreground/20",
  "Vulnerable":            "text-foreground/50 border-foreground/15",
};

export function ArtsGrid() {
  return (
    <section id="archive" className="py-32 px-6 w-full max-w-7xl mx-auto">
      <div className="mb-20">
        <p className="text-xs uppercase tracking-widest text-primary/40 mb-3">Presented by STIICE</p>
        <p className="text-xs uppercase tracking-widest text-primary/60 mb-6">The Human Archive</p>
        <div className="w-8 h-[1px] bg-primary/40 mb-8" />
        <h2 className="font-serif text-3xl md:text-5xl text-foreground max-w-lg leading-tight">
          Twelve human abilities currently under observation.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10">
        {arts.map((art, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: i * 0.04 }}
            className="group relative bg-background p-8 flex flex-col gap-6 hover:bg-card/60 transition-colors duration-500 cursor-default"
            data-testid={`card-art-${i}`}
          >
            {/* Entry + Classification row */}
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-widest text-primary/40 font-mono">
                Archive Entry {art.entry}
              </span>
              <span className="text-xs tracking-wider text-muted-foreground/50 uppercase">
                {art.classification}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug group-hover:text-primary/90 transition-colors duration-500">
              {art.title}
            </h3>

            {/* Status badge */}
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full border ${statusStyle[art.status]}`} />
              <span className={`text-xs tracking-widest uppercase ${statusStyle[art.status]}`}>
                {art.status}
              </span>
            </div>

            <div className="w-full h-[1px] bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500" />

            {/* Observation */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-2">Observation</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {art.observation}
              </p>
            </div>

            {/* What Is Lost */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-2">What Is Lost</p>
              <p className="font-serif text-base text-foreground/80 italic leading-relaxed">
                {art.whatIsLost}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
