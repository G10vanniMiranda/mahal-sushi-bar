import type { Metadata } from "next";
import WhatsappButton from "./components/WhatsappButton";
import ReviewsSection from "./components/ReviewsSection";
import HighlightsSection from "./components/HighlightsSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import LocationSection from "./components/LocationSection";

// SEO da página inicial (sobrepõe/compõe com o metadata do layout)
export const metadata: Metadata = {
  // Título específico da Home (usa o template do layout)
  title: "Culinária japonesa em Porto Velho",
  description:
    "Mahal Sushi Bar em Porto Velho: sushi e culinária japonesa com ingredientes frescos, apresentação impecável e delivery rápido. Peça online e aproveite!",
  alternates: { canonical: "/" },
  openGraph: {
    url: "https://www.mahalsushibar.com/",
    title: "Mahal Sushi Bar — Culinária japonesa em Porto Velho",
    description:
      "Sushi, combinados e pratos japoneses com ingredientes frescos. Delivery em Porto Velho — RO.",
    images: [
      {
        url: "/combo.jpeg",
        width: 1200,
        height: 630,
        alt: "Peças de sushi selecionadas do Mahal Sushi Bar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahal Sushi Bar — Culinária japonesa em Porto Velho",
    description:
      "Sushi, combinados e pratos japoneses com ingredientes frescos. Delivery em Porto Velho — RO.",
    images: ["/combo.jpeg"],
  },
  robots: { index: true, follow: true },
  keywords: [
    "sushi porto velho",
    "culinária japonesa",
    "delivery sushi porto velho",
    "comida japonesa",
    "mahal sushi bar",
  ],
};

export default function Home() {
  // JSON-LD: Restaurant/LocalBusiness com endereço e horário
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Mahal Sushi Bar",
    url: "https://www.mahalsushibar.com/",
    image: "https://www.mahalsushibar.com/combo.jpeg",
    telephone: "+5569999220637",
    servesCuisine: "Japanese",
    priceRange: "R$R$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Estácio De Sá, 6693 - Cuniã",
      addressLocality: "Porto Velho",
      addressRegion: "RO",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "19:00",
        closes: "23:00",
      },
    ],
    areaServed: "Porto Velho - RO",
    sameAs: [
      "https://app.cardapioweb.com/mahal_sushi_bar",
    ],
    hasMenu: "https://app.cardapioweb.com/mahal_sushi_bar",
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center bg-[#2A2218]">
      {/* Marcações estruturadas para SEO (Google Rich Results) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Seção 1 - Hero */}
      <HeroSection />

      {/* Seção 2 - Sobre */}
      <AboutSection />

      {/* Seção 3 - Destaques */}
      <HighlightsSection />

      {/* Seção 4 - Depoimentos */}
      <ReviewsSection />

      {/* Seção 5 - Localização */}
      <LocationSection />

      <WhatsappButton />
    </div>
  );
}
