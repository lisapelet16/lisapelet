import { Factory, Package, Truck } from "lucide-react";
import Reveal from "../motion/Reveal";
import Stagger, { StaggerItem } from "../motion/Stagger";

const steps = [
  {
    icon: Factory,
    step: "01",
    title: "Üretim",
    description: "Ahşap atıkları yüksek basınçla preslenir, kimyasal eklenmez.",
  },
  {
    icon: Package,
    step: "02",
    title: "Kalite Kontrol",
    description: "Nem, kül ve çap ölçümleri her partide test edilir.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Teslimat",
    description: "Bursa ve çevresine hızlı, güvenli teslimat yapılır.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-stone-900 text-white">
      <div className="container-main">
        <Reveal className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-400">
            Süreç
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Tohumdan sobaya kadar kalite.
          </h2>
        </Reveal>

        <Stagger className="grid gap-8 md:grid-cols-3" stagger={0.15}>
          {steps.map((item) => (
            <StaggerItem key={item.step}>
              <div className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-950/50 p-8 transition-colors hover:border-orange-500/30">
                <div className="absolute -right-4 -top-4 text-7xl font-black text-stone-800/80 transition-colors group-hover:text-orange-500/10">
                  {item.step}
                </div>
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600/20 text-orange-400 transition-transform group-hover:scale-110">
                  <item.icon size={26} />
                </div>
                <h3 className="relative mb-3 text-xl font-bold">{item.title}</h3>
                <p className="relative text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
