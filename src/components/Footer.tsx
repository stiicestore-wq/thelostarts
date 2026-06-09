export function Footer() {
  return (
    <footer className="w-full py-12 px-6 flex flex-col items-center text-center border-t border-primary/10">
      <div className="font-serif text-xl tracking-widest text-foreground uppercase mb-4">
        The Lost Arts
      </div>
      <p className="text-muted-foreground font-light text-sm mb-8">
        Modern rituals for a distracted world.
      </p>
      
      <div className="w-16 h-[1px] bg-primary/40 mb-8" />
      
      <p className="text-muted-foreground/50 text-xs font-light tracking-wider">
        &copy; {new Date().getFullYear()} The Lost Arts. All rights reserved.
      </p>
    </footer>
  );
}
