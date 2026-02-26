import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <SectionDivider />
      <WhySection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <MethodSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
