import './LandingPage.css';
import FooterSection from './FooterSection';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';

function LandingPage() {
  return (
    <div className="landing-page">
        <HeroSection/>
        <ServicesSection/>
        <FooterSection/>
    </div>
  );
}

export default LandingPage;
