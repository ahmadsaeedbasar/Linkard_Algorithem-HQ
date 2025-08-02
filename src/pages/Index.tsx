import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PricingSection from "@/components/PricingSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureGrid />
      <TestimonialCarousel />
      <PricingSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
