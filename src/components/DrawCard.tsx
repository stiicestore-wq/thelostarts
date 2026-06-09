import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const artsData = [
  {
    title: "The Art of Attention",
    ritual: "For one hour, do only one thing at a time. No switching, no tabs, no checking.",
    reflection: "Notice how much of your mind returns when you stop dividing it.",
    numeral: "I"
  },
  {
    title: "The Art of Reading",
    ritual: "Read a physical book for 20 minutes before sleeping. No skimming — follow every sentence.",
    reflection: "Observe how deep focus alters your sense of self.",
    numeral: "II"
  },
  {
    title: "The Art of Boredom",
    ritual: "Sit in a room and do absolutely nothing for 15 minutes.",
    reflection: "Watch how your mind frantically searches for input, then slowly settles.",
    numeral: "III"
  },
  {
    title: "The Art of Solitude",
    ritual: "Take yourself somewhere quiet for an hour. No companion, no device.",
    reflection: "Discover what it means to be good company for yourself.",
    numeral: "IV"
  },
  {
    title: "The Art of Conversation",
    ritual: "Have a conversation tonight where you ask more than you speak.",
    reflection: "Notice the depth that emerges when you stop performing and start listening.",
    numeral: "V"
  },
  {
    title: "The Art of Listening",
    ritual: "In your next conversation, let the other person finish completely before you respond.",
    reflection: "Hear what is said in the pauses between the words.",
    numeral: "VI"
  },
  {
    title: "The Art of Presence",
    ritual: "Eat one meal today without a screen, a book, or background noise.",
    reflection: "Experience a routine act as if encountering it for the first time.",
    numeral: "VII"
  },
  {
    title: "The Art of Observation",
    ritual: "Sit somewhere public for 20 minutes and watch the world without recording it.",
    reflection: "See the complexity in what you previously scrolled past.",
    numeral: "VIII"
  },
  {
    title: "The Art of Reflection",
    ritual: "Write three sentences about what you actually noticed today — not what you did.",
    reflection: "Reacquaint yourself with your own interior landscape.",
    numeral: "IX"
  },
  {
    title: "The Art of Waiting",
    ritual: "The next time you wait — in a line, for a reply, for anything — wait without filling it.",
    reflection: "Feel the texture of time passing when you stop fighting it.",
    numeral: "X"
  },
  {
    title: "The Art of Walking",
    ritual: "Go for a walk without a destination and without headphones.",
    reflection: "Let your mind move at the pace of your feet.",
    numeral: "XI"
  },
  {
    title: "The Art of Wonder",
    ritual: "Choose one ordinary thing today and look at it for longer than feels comfortable.",
    reflection: "Find the strange inside the familiar.",
    numeral: "XII"
  }
];

export function DrawCard() {
  const [drawnCard, setDrawnCard] = useState<typeof artsData[0] | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const drawRandomCard = () => {
    setIsDrawing(true);
    // Hide current card, then show new one
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * artsData.length);
      setDrawnCard(artsData[randomIndex]);
      setIsDrawing(false);
    }, 600);
  };

  return (
    <section className="py-32 px-6 w-full flex flex-col items-center bg-card/30">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Draw from the Archive</h2>
        <p className="text-muted-foreground font-light tracking-wide uppercase text-sm">
          Receive a forgotten ritual
        </p>
      </div>

      <div className="relative w-full max-w-md aspect-[3/4] flex flex-col items-center justify-center perspective-1000 mb-12">
        <AnimatePresence mode="wait">
          {!drawnCard ? (
            <motion.div
              key="deck"
              initial={{ opacity: 0, rotateY: -10 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-card border border-primary/20 flex items-center justify-center"
            >
              <div className="w-16 h-24 border border-primary/40 flex items-center justify-center">
                <div className="w-10 h-16 border border-primary/20" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={drawnCard.title}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-background border border-primary p-8 md:p-12 flex flex-col justify-between shadow-2xl"
              data-testid="drawn-card"
            >
              <div className="text-center">
                <span className="font-serif text-primary text-xl block mb-6">{drawnCard.numeral}</span>
                <h3 className="font-serif text-3xl md:text-4xl mb-8">{drawnCard.title}</h3>
              </div>
              
              <div className="space-y-8 flex-1 flex flex-col justify-center">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary/60 mb-2">The Ritual</h4>
                  <p className="font-light text-lg leading-relaxed">{drawnCard.ritual}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary/60 mb-2">Reflection</h4>
                  <p className="font-serif text-muted-foreground italic text-xl">{drawnCard.reflection}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={drawRandomCard}
        disabled={isDrawing}
        className="px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 uppercase tracking-widest text-sm disabled:opacity-50"
        data-testid="button-draw-card"
      >
        {drawnCard ? "Draw Another" : "Draw a Lost Art"}
      </button>
    </section>
  );
}
