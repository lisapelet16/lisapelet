import Image from "next/image";
import { Recycle, ShieldCheck, Thermometer, Truck } from "lucide-react";

const badges = [
  { icon: Thermometer, label: "Yüksek kalori" },
  { icon: Recycle, label: "Geri dönüşüm" },
  { icon: ShieldCheck, label: "Kalite kontrol" },
  { icon: Truck, label: "Hızlı teslimat" },
];

export default function HeroVisual() {
  return (
    <div className="relative hidden lg:block">
      <div className="relative mx-auto max-w-lg">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-600/10 blur-2xl" />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <div className="relative aspect-[7/8]">
            <Image
              src="/images/hero-stove.png"
              alt="Pelet sobasında sıcak ve konforlu bir ev ortamı"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 512px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-3 p-5">
            {badges.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-stone-950/70 px-3 py-2.5"
              >
                <item.icon size={16} className="shrink-0 text-orange-400" />
                <span className="text-xs font-medium text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
