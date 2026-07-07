import { SITE } from "@/lib/config";
import faqs from "@/data/faq.json";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    image: `${SITE.url}/brand/logo-header.svg`,
    url: SITE.url,
    telephone: SITE.phones[0],
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: "Marunji, Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    // REPLACE: exact geo-coordinates for the head office
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5912,
      longitude: 73.7389,
    },
    sameAs: [SITE.social.instagram, SITE.social.facebook],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
