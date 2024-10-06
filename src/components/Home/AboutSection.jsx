import "/src/assets/css/components/home/about-section.css";

function AboutSection() {
  return (
    <div className="main-section about-section">
      <h2 className="heading">About <span>Us</span></h2>

      <section className="main-content">
         <section className="image-section">
            <img src="images/about-1.jpg" alt="" />
         </section>

         <p className="writeup">
            The Rivers State International Cultural Carnival Abuja (RICCA) 1.0 is designed to 
            showcase and promote the rich cultural heritage of the Rivers People. This event 
            brings together the diverse languages, customs, norms, values, and traditions of 
            our ethnic nationalities, including Opobo/Nkoro, Bonny, Ikwerre, Ogoni, and many more. 
            RICCA 1.0 will also feature music concerts, traditional dances, art exhibitions, and a 
            fashion parade, making it a must-attend event for culture enthusiasts.

            <br /><br />
            <h4>Event Highlights:</h4>
            <ul>
               <li>Traditional Dances</li>
               <li>Legendary Music Performances</li>
               <li>Canoe Regatta from coastal communities</li>
               <li>Wood carvings and textile exhibitions</li>
               <li>Nollywood celebrity appearances</li>
               <li>Award presentations</li>
            </ul>
         </p>
      </section>
    </div>
  );
}

export default AboutSection;
