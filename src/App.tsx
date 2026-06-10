import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { ArtsGrid } from "@/components/ArtsGrid";
import { IndexSection } from "@/components/IndexSection";
import { DrawCard } from "@/components/DrawCard";
import { FoundersEdition } from "@/components/FoundersEdition";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";

export default function App() {
  return (
    <main className="min-h-[100dvh] w-full bg-background text-foreground flex flex-col items-center">
      <div className="film-grain" />
      <HeroSection />
      <ManifestoSection />
      <ArtsGrid />
      <IndexSection />
      <DrawCard />
      <FoundersEdition />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
