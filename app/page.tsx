import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustryStrip from "@/components/IndustryStrip";
import WhyUs from "@/components/WhyUs";
import TwoBlocks from "@/components/TwoBlocks";
import ComplianceBand from "@/components/ComplianceBand";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IndustryStrip />
        <WhyUs />
        <ComplianceBand />
        <TwoBlocks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
