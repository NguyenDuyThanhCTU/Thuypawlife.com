import { ContactSection } from '@/components/sections/contact-section'
import { DoctorsSection } from '@/components/sections/doctors-section'
import { FAQSection } from '@/components/sections/faq-section'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { HeroSection } from '@/components/sections/hero-section'
import { MobileStickyActions } from '@/components/sections/mobile-sticky-actions'
import { ProcessSection } from '@/components/sections/process-section'
import { ServicesSection } from '@/components/sections/services-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section'

const veterinaryCareSchema = {
  '@context': 'https://schema.org',
  '@type': ['VeterinaryCare', 'LocalBusiness'],
  name: 'Phòng khám thú y Sài Gòn',
  telephone: '0900 000 000',
  areaServed: 'Sài Gòn, Việt Nam',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sài Gòn',
    addressCountry: 'VN',
  },
  openingHours: 'Mo-Su 08:00-20:00',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(veterinaryCareSchema),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <DoctorsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyActions />
    </>
  )
}
