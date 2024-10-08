import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ObjectivesSection from "../components/Home/ObjectivesSection";
import EventsSection from "../components/Home/EventsSection";
import SponsorSection from "../components/Home/SponsorSection";
import ContactUsSection from "../components/Home/ContactUsSection";

import "/src/assets/css/pages/home.css";

function Home() {
  return (
    <div>
      <Header />

      <HeroSection />
      <AboutSection />
      <ObjectivesSection />
      <EventsSection />
      <SponsorSection />
      <ContactUsSection />
      


      {/* <Footer /> */}
    </div>
  );
}

export default Home;
