import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import ProductTeaser from '@/components/ProductTeaser';
import SpecsTeaser from '@/components/SpecsTeaser';
import OEMSection from '@/components/OEMSection';
import Markets from '@/components/Markets';
import Factory from '@/components/Factory';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyUs />
      <ProductTeaser />
      <SpecsTeaser />
      <OEMSection />
      <Markets />
      <Factory />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
