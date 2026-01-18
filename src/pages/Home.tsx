import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Technologies } from '../components/home/Technologies';
import { PortfolioPreview } from '../components/home/PortfolioPreview';
import { CTASection } from '../components/home/CTASection';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <PortfolioPreview />
      <CTASection />
    </main>
  );
}
