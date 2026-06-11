export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-orange-500/12 blur-2xl" />
      <div className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-amber-500/8 blur-2xl" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-orange-600/8 blur-2xl" />
    </div>
  );
}
