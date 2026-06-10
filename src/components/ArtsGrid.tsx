import { useState } from "react";
import { motion } from "framer-motion";
import { ArchiveModal, ObservationModal } from "@/components/ArchiveModal";
import type { ArchiveEntry, ObservationEntry } from "@/components/ArchiveModal";

type StatusLevel = "Critically Endangered" | "Endangered" | "Threatened" | "Vulnerable";

type Art = {
  entry: string;
  title: string;
  classification: string;
  status: StatusLevel;
  observation: string;
  whatIsLost: string;
};

const featuredArts: Art[] = [
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
    entry: "#004",
    title: "The Art of Deep Reading",
    classification: "Cognitive Art",
    status: "Threatened",
    observation: "We read more words than ever. Fewer of them stay with us.",
    whatIsLost: "The ability to remain with one thought long enough to be changed by it.",
  },
];

const underObservation: ObservationEntry[] = [
  { entry: "#003", title: "The Art of Solitude",      classification: "Solitary Art",   status: "Threatened" },
  { entry: "#005", title: "The Art of Conversation",  classification: "Relational Art", status: "Threatened" },
  { entry: "#006", title: "The Art of Listening",     classification: "Relational Art", status: "Threatened" },
  { entry: "#007", title: "The Art of Presence",      classification: "Presence Art",   status: "Threatened" },
  { entry: "#008", title: "The Art of Observation",   classification: "Presence Art",   status: "Vulnerable" },
  { entry: "#009", title: "The Art of Reflection",    classification: "Cognitive Art",  status: "Threatened" },
  { entry: "#010", title: "The Art of Waiting",       classification: "Temporal Art",   status: "Endangered" },
  { entry: "#011", title: "The Art of Walking",       classification: "Solitary Art",   status: "Vulnerable" },
  { entry: "#012", title: "The Art of Wonder",        classification: "Presence Art",   status: "Critically Endangered" },
];

const archiveContent: Record<string, ArchiveEntry> = {
  "#001": {
    entry: "#001",
    title: "The Art of Attention",
    classification: "Cognitive Art",
    status: "Critically Endangered",
    heroStatement: "For most of human history, attention belonged to the individual.",
    sections: [
      {
        label: "Observation",
        lines: [
          "Today, attention is measured, optimized, bought, and sold.",
          "",
          "Entire industries compete for it.",
          "Algorithms shape themselves around it.",
          "Platforms study how long they can keep it.",
          "",
          "And yet, many people feel they have less of it than ever.",
        ],
      },
      {
        label: "The Shift",
        lines: [
          "We do not simply get distracted anymore.",
          "",
          "We live inside systems designed to interrupt us.",
          "",
          "A quiet moment appears.",
          "A hand reaches for the phone.",
          "A thought begins.",
          "A notification ends it.",
          "",
          "Over time, the mind learns not to stay.",
        ],
      },
      {
        label: "The Cost",
        lines: [
          "When attention fragments, something deeper fragments with it.",
          "",
          "Reading becomes harder.",
          "Reflection becomes rarer.",
          "Conversation becomes shallower.",
          "Presence becomes difficult.",
          "",
          "We begin consuming more while experiencing less.",
        ],
      },
      {
        label: "Reflection",
        lines: [
          "If you have ever unlocked your phone without knowing why...",
          "",
          "Opened an app without intending to...",
          "",
          "Or felt the urge to check something after only a few seconds of stillness...",
          "",
          "This archive is about you.",
        ],
      },
      {
        label: "Practice",
        lines: [
          "Tonight, spend ten minutes without stimulation.",
          "",
          "No music.",
          "No podcast.",
          "No scrolling.",
          "No notifications.",
          "",
          "Just attention.",
          "",
          "Notice what reaches for you when nothing is reaching for you.",
        ],
      },
    ],
  },

  "#002": {
    entry: "#002",
    title: "The Art of Boredom",
    classification: "Solitary Art",
    status: "Critically Endangered",
    heroStatement: "Boredom was once the room where the mind met itself.",
    sections: [
      {
        label: "Observation",
        lines: [
          "For most of human history, empty time was unavoidable.",
          "",
          "Waiting.",
          "Walking.",
          "Sitting.",
          "Staring out of windows.",
          "",
          "Nothing filled every gap.",
          "",
          "Today, almost every empty moment is interrupted before it can become anything.",
          "",
          "The moment silence appears, we reach for something to remove it.",
        ],
      },
      {
        label: "The Shift",
        lines: [
          "Boredom used to be a threshold.",
          "",
          "A doorway into imagination, memory, discomfort, creativity, and thought.",
          "",
          "Now it is treated like a problem to be solved instantly.",
          "",
          "A queue becomes a scroll.",
          "A pause becomes a notification.",
          "A quiet evening becomes background noise.",
          "",
          "The mind no longer has to wander.",
          "",
          "So it forgets how.",
        ],
      },
      {
        label: "The Cost",
        lines: [
          "When boredom disappears, the mind loses one of its oldest forms of recovery.",
          "",
          "Creativity has less room to emerge.",
          "Reflection arrives less often.",
          "Original thoughts become harder to hear.",
          "",
          "A person can become constantly entertained and still feel strangely empty.",
        ],
      },
      {
        label: "Reflection",
        lines: [
          "If you cannot stand in a line without checking your phone...",
          "",
          "If silence makes you uncomfortable...",
          "",
          "If doing nothing feels almost impossible...",
          "",
          "This archive is about the space that was taken before you noticed it was gone.",
        ],
      },
      {
        label: "Practice",
        lines: [
          "Spend fifteen minutes doing nothing.",
          "",
          "No phone.",
          "No music.",
          "No reading.",
          "No productivity.",
          "",
          "Sit.",
          "Walk.",
          "Look out of a window.",
          "",
          "Do not try to improve the moment.",
          "",
          "Let it be empty long enough for something of your own to appear.",
        ],
      },
    ],
  },

  "#004": {
    entry: "#004",
    title: "The Art of Deep Reading",
    classification: "Cognitive Art",
    status: "Threatened",
    heroStatement: "Reading was once a way to disappear into another mind.",
    sections: [
      {
        label: "Observation",
        lines: [
          "We read constantly now.",
          "",
          "Messages.",
          "Captions.",
          "Headlines.",
          "Comments.",
          "Notifications.",
          "",
          "Words are everywhere.",
          "",
          "But many people feel they can no longer stay with a book, an essay, or a long thought without becoming restless.",
          "",
          "The problem is not that we stopped reading.",
          "",
          "The problem is that reading became fragmented.",
        ],
      },
      {
        label: "The Shift",
        lines: [
          "The digital world trained the eye to scan.",
          "",
          "To skim.",
          "To jump.",
          "To search for the next signal.",
          "",
          "Deep reading asks for the opposite.",
          "",
          "Stay.",
          "Return.",
          "Follow.",
          "Remember.",
          "Let the thought unfold.",
          "",
          "In a world built for speed, deep reading feels almost rebellious.",
        ],
      },
      {
        label: "The Cost",
        lines: [
          "When deep reading weakens, more than books are lost.",
          "",
          "Patience weakens.",
          "Memory weakens.",
          "Imagination weakens.",
          "Complex thought becomes harder to hold.",
          "",
          "We consume more information, but carry less meaning.",
        ],
      },
      {
        label: "Reflection",
        lines: [
          "If you once loved reading but now struggle to finish a chapter...",
          "",
          "If your hand reaches for your phone between pages...",
          "",
          "If long text feels harder than it used to...",
          "",
          "This archive is not accusing you.",
          "",
          "It is naming what changed.",
        ],
      },
      {
        label: "Practice",
        lines: [
          "Read ten pages with your phone in another room.",
          "",
          "Not beside you.",
          "Not face down.",
          "Not on silent.",
          "",
          "In another room.",
          "",
          "When your mind reaches for it, keep reading.",
          "",
          "The return is the practice.",
        ],
      },
    ],
  },
};

const statusStyle: Record<StatusLevel, string> = {
  "Critically Endangered": "text-primary border-primary/50",
  "Endangered":            "text-foreground/70 border-foreground/30",
  "Threatened":            "text-foreground/60 border-foreground/20",
  "Vulnerable":            "text-foreground/50 border-foreground/15",
};

function FeaturedCard({
  art,
  index,
  onOpen,
}: {
  art: Art;
  index: number;
  onOpen: (entry: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative bg-background border border-primary/10 hover:border-primary/30 p-8 flex flex-col gap-6 transition-all duration-500 cursor-pointer"
      onClick={() => onOpen(art.entry)}
      data-testid={`card-featured-${index}`}
    >
      <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="flex items-center justify-between">
        <span className="text-xs tracking-widest text-primary/40 font-mono">Archive Entry {art.entry}</span>
        <span className="text-xs tracking-wider text-muted-foreground/50 uppercase">{art.classification}</span>
      </div>

      <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug group-hover:text-primary/90 transition-colors duration-500">
        {art.title}
      </h3>

      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full border ${statusStyle[art.status]}`} />
        <span className={`text-xs tracking-widest uppercase ${statusStyle[art.status]}`}>{art.status}</span>
      </div>

      <div className="w-full h-[1px] bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500" />

      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-2">Observation</p>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">{art.observation}</p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-2">What Is Lost</p>
        <p className="font-serif text-base text-foreground/80 italic leading-relaxed">{art.whatIsLost}</p>
      </div>

      <div className="mt-auto pt-4 border-t border-primary/10 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors duration-500">
          Open Archive
        </span>
        <span className="text-primary/30 group-hover:text-primary transition-all duration-500 text-lg leading-none translate-x-0 group-hover:translate-x-1">
          →
        </span>
      </div>
    </motion.div>
  );
}

function ObservationCard({
  art,
  index,
  onOpen,
}: {
  art: ObservationEntry;
  index: number;
  onOpen: (entry: ObservationEntry) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.07 }}
      className="group relative border border-dashed border-primary/15 hover:border-primary/25 p-6 flex flex-col gap-4 transition-all duration-500 cursor-pointer"
      onClick={() => onOpen(art)}
      data-testid={`card-observation-${index}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-widest text-primary/30 font-mono">{art.entry}</span>
        <span className="text-[10px] uppercase tracking-widest text-primary/30 border border-primary/20 px-2 py-0.5">
          Archive In Assembly
        </span>
      </div>

      <h4 className="font-serif text-lg text-foreground/50 group-hover:text-foreground/70 leading-snug transition-colors duration-500">
        {art.title}
      </h4>

      <div className="flex items-center gap-5">
        <span className="text-xs text-muted-foreground/30">{art.classification}</span>
        <div className="w-[1px] h-3 bg-primary/15" />
        <span className={`text-xs ${statusStyle[art.status as StatusLevel]}`}>{art.status}</span>
      </div>

      <div className="mt-1 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[10px] uppercase tracking-widest text-primary/40">View entry</span>
        <span className="text-primary/30 text-sm leading-none">→</span>
      </div>
    </motion.div>
  );
}

export function ArtsGrid() {
  const [openEntry, setOpenEntry] = useState<string | null>(null);
  const [obsEntry, setObsEntry] = useState<ObservationEntry | null>(null);

  const modalEntry = openEntry ? (archiveContent[openEntry] ?? null) : null;

  return (
    <>
      <section id="archive" className="py-32 px-6 w-full max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-primary/40 mb-3">Presented by STIICE</p>
          <div className="w-8 h-[1px] bg-primary/40 mb-8" />
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8 leading-tight">
            The Human Archive
          </h2>
          <p className="text-muted-foreground/60 font-light text-sm md:text-base leading-relaxed max-w-lg">
            A living archive of human abilities that appear to be fading in the digital age.
          </p>
          <p className="text-muted-foreground/40 font-light text-sm mt-3">
            Some records are open. Others are still being assembled.
          </p>
        </div>

        {/* Open Records label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-4 h-[1px] bg-primary/40" />
          <p className="text-xs uppercase tracking-widest text-primary/60">Open Records</p>
        </div>

        {/* 3 Featured open archives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {featuredArts.map((art, i) => (
            <FeaturedCard
              key={art.entry}
              art={art}
              index={i}
              onOpen={entry => setOpenEntry(entry)}
            />
          ))}
        </div>

        {/* Under Observation section */}
        <div className="border-t border-primary/10 pt-16">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-primary/50 mb-4">Archive In Assembly</p>
            <div className="w-6 h-[1px] bg-primary/20 mb-6" />
            <p className="text-sm text-muted-foreground/50 font-light leading-relaxed max-w-lg">
              These records are currently being assembled. STIICE publishes only when an ability has been properly observed, documented, and preserved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {underObservation.map((art, i) => (
              <ObservationCard
                key={art.entry}
                art={art}
                index={i}
                onOpen={entry => setObsEntry(entry)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full archive modal */}
      <ArchiveModal entry={modalEntry} onClose={() => setOpenEntry(null)} />

      {/* Under observation modal */}
      <ObservationModal entry={obsEntry} onClose={() => setObsEntry(null)} />
    </>
  );
}
