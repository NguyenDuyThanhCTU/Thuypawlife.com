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
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2766503063112!2d106.7352112!3d10.942462500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d96fbf00f9ad%3A0x64c14696842699e9!2zUGjDsm5nIEtow6FtIFRow7ogWSBQYXdMaWZl!5e0!3m2!1sen!2s!4v1782264725588!5m2!1sen!2s"
            loading="lazy"
            className="w-full h-[50vh]"
          ></iframe>
        </div>
        <PetRecoveryGallery Collections={Collections} />
        <WhyChooseUsSection />
        <ProcessSection />
        <DoctorsSection />
        <TestimonialsSection />
        <FAQSection />
        {/* <ContactSection Config={Config} /> */}
      </main>

      {/* <MobileStickyActions Config={Config} /> */}
    </>
  );
}
