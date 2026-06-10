import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { ArtsGrid } from "@/components/ArtsGrid";
import { WhatStiiceIs } from "@/components/WhatStiiceIs";
import { WaitlistSection } from "@/components/WaitlistSection";
import { FoundersEdition } from "@/components/FoundersEdition";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full bg-background text-foreground flex flex-col items-center">
      <HeroSection />
      <ManifestoSection />
      <ArtsGrid />
      <WhatStiiceIs />
      <FoundersEdition />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
