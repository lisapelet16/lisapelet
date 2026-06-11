const items = [
  "Premium Çam Peleti",
  "Düşük Kül Oranı",
  "Bursa Üretim",
  "Hızlı Teslimat",
  "Çevre Dostu",
  "Toptan Satış",
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-stone-200 bg-white py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-16" />
      <div className="animate-marquee flex w-max gap-10">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
