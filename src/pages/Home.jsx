import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";

import "/src/assets/css/pages/home.css";

function Home() {
  return (
    <div>
      <Header />

      <HeroSection />
      <AboutSection />
      


      {/* <Footer /> */}
    </div>
  );
}

export default Home;
