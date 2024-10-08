import "/src/assets/css/components/home/hero-section.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <a name="home"></a>
      <section className="main-content">
         <h1>
            Rivers State International <br />
            Cultural Carnival <br />
            (RICCA) 1.0
         </h1>

         <p>...Celebrating Our Diversity and Rich Cultural Heritage</p>

         <a href="#">
            <span className="text">Explore</span>

            <span className="icon-box">
               <i className="fa-solid fa-arrow-right-long"></i>
            </span>
         </a>

         <section className="powered">
            <span>Powered by:</span>
            <section className="image-section">
               <img src="logos/b-brand-logo.png" alt="" />
            </section>
         </section>
      </section>
    </div>
  );
}

export default HeroSection;
