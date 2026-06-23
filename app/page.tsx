import { ContactSection } from "@/components/sections/contact-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { FAQSection } from "@/components/sections/faq-section";

import { HeroSection } from "@/components/sections/hero-section";
import HomeSlide from "@/components/sections/HomeSlide";
import { MobileStickyActions } from "@/components/sections/mobile-sticky-actions";
import { PetRecoveryGallery } from "@/components/sections/pet-recovery-gallery";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { find } from "@/config/lib/api";

const veterinaryCareSchema = {
  "@context": "https://schema.org",
  "@type": ["VeterinaryCare", "LocalBusiness"],
  name: "Phòng khám thú y Sài Gòn",
  telephone: "0900 000 000",
  areaServed: "Sài Gòn, Việt Nam",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sài Gòn",
    addressCountry: "VN",
  },
  openingHours: "Mo-Su 08:00-20:00",
};

export default async function Home() {
  const Config = await find("Config");
  const Products = await find("Products");
  const Collections = await find("Collections");
  const Slides = await find("Slides");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(veterinaryCareSchema),
        }}
      />

      <main>
        <HomeSlide Data={Slides} />
        <HeroSection Config={Config} />
        <ServicesSection Products={Products} />
        <PetRecoveryGallery Collections={Collections} />
        <WhyChooseUsSection />
        <ProcessSection />
        <DoctorsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection Config={Config} />
      </main>

      {/* <MobileStickyActions Config={Config} /> */}
    </>
  );
}
