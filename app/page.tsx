import HomeContent from "../components/home/HomeContent";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Bursa Pelet | Soba Peleti ve Premium Çam Peleti",
  description:
    "Lisa Pelet: Bursa Kestel'de üretilen premium çam peleti ve soba peleti. Düşük kül, yüksek kalori. 15 kg ve 25 kg ambalaj, Bursa'ya hızlı teslimat.",
  path: "/",
  keywords: [
    "pelet",
    "soba peleti",
    "bursa pelet",
    "çam peleti",
    "bursa çam peleti",
    "kestel pelet",
    "pelet sobası yakıtı",
    "premium pelet bursa",
  ],
});

export default function Home() {
  return <HomeContent />;
}
