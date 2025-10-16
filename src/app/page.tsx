import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import AboutIntro from "@/components/sections/about-intro";
import ServicesPreview from "@/components/sections/services-preview";
import ApproachFeatures from "@/components/sections/approach-features";
import ValueProposition from "@/components/sections/value-proposition";
import VitaminQuizCta from "@/components/sections/vitamin-quiz-cta";
import PartnersCarousel from "@/components/sections/partners-carousel";
import Testimonials from "@/components/sections/testimonials";
import ProcessSteps from "@/components/sections/process-steps";
import QuickWins from "@/components/sections/quick-wins";
import InstagramFeed from "@/components/sections/instagram-feed";
import SocialCta from "@/components/sections/social-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutIntro />
        <ServicesPreview />
        <ApproachFeatures />
        <ValueProposition />
        <VitaminQuizCta />
        <PartnersCarousel />
        <Testimonials />
        <ProcessSteps />
        <QuickWins />
        <InstagramFeed />
        <SocialCta />
      </main>
      <Footer />
    </div>
  );
}