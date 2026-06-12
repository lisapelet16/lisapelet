import { faqItems } from "../data/faq";
import {
  companyEmail,
  contactPeople,
  primaryContact,
} from "../data/contact";
import { defaultDescription, siteName, siteUrl } from "../lib/site";

type JsonLdProps = {
  includeFaq?: boolean;
};

export default function JsonLd({ includeFaq = false }: JsonLdProps) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    description: defaultDescription,
    url: siteUrl,
    email: companyEmail,
    telephone: `+${primaryContact.phoneTel}`,
    image: `${siteUrl}/images/logo-dark.webp`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kestel",
      addressRegion: "Bursa",
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "City", name: "Bursa" },
      { "@type": "AdministrativeArea", name: "Kestel" },
    ],
    contactPoint: contactPeople.map((person) => ({
      "@type": "ContactPoint",
      telephone: `+${person.phoneTel}`,
      contactType: "sales",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    })),
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: defaultDescription,
    inLanguage: "tr-TR",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  const schemas: Record<string, unknown>[] = [localBusiness, website];

  if (includeFaq) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
