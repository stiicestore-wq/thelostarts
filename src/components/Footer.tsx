export function Footer() {
  return (
    <footer className="w-full py-12 px-6 flex flex-col items-center text-center border-t border-primary/10">
      <div className="font-serif text-xl tracking-widest text-primary uppercase mb-2">
        STIICE
      </div>
      <p className="text-muted-foreground font-light text-sm mb-1 uppercase tracking-widest text-xs">
        The Human Archive
      </p>
      <p className="text-muted-foreground/60 font-light text-sm mb-8">
        Documenting the abilities we are forgetting.
      </p>

      <div className="w-16 h-[1px] bg-primary/40 mb-8" />

      <p className="text-muted-foreground/50 text-xs font-light tracking-wider">
        &copy; {new Date().getFullYear()} STIICE. All rights reserved.
      </p>
    </footer>
  );
}
