import "/src/assets/css/components/home/objectives-section.css";

function AboutSection() {
  return (
    <div className="main-section objectives-section">
      <a name="objective"></a>
      <h2 className="heading">Our Objectives</h2>

      <section className="main-content">
         <section className="box">
            <h4>Fostering Unity</h4>
            <p className="writeup">
               The carnival aims to unify the various ethnic nationalities in Rivers State, 
               including Opobo, Bonny, Ikwerre, Ogoni, Eleme, Abua, and others
            </p>
         </section>

         <section className="box">
            <h4>Promoting Artistic Expression</h4>
            <p className="writeup">
               RICCA 1.0 provides a platform for talented artists, dancers, musicians, and artisans 
               to showcase their craft, creativity, and traditions through various activities such 
               as performances and exhibitions.
            </p>
         </section>

         <section className="box">
            <h4>Cultural Awareness</h4>
            <p className="writeup">
               Our goal is to increase awareness and appreciation of the rich cultural heritage of 
               Rivers State, promoting it to both national and international audiences.
            </p>
         </section>
         
         <section className="box">
            <h4>Economic Growth</h4>
            <p className="writeup">
               RICCA aims to drive economic growth by positioning Rivers State as a key player in 
               cultural tourism, attracting foreign direct investment, and creating job 
               opportunities for locals.
            </p>
         </section>

         <section className="box">
            <h4>Tourism Promotion</h4>
            <p className="writeup">
               The carnival will serve as a major attraction for national and international 
               tourists, showcasing the best of Rivers State's heritage and artistic excellence.
            </p>
         </section>
      </section>
    </div>
  );
}

export default AboutSection;
