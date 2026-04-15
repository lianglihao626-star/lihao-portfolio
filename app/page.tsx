import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { PhotographySection } from "@/components/photography-section"
import { DesignSection } from "@/components/design-section"
import { PostersSection } from "@/components/posters-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] pt-24">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ExperienceSection />
      <HobbiesSection />
      <PhotographySection />
      <DesignSection />
      <PostersSection />
      <Footer />
    </main>
  )
}
