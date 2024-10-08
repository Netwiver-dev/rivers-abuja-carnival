import "/src/assets/css/components/home/events-section.css";

function AboutSection() {
  return (
    <div className="main-section events-section">
      <a name="event"></a>
      <h2 className="heading">Events Schedule</h2>

      <section className="main-content">
         <section className="event-box">
            <h4>Rivers State International Cultural Canoe Festival (Regatta)</h4>
            <p><strong>Date:</strong> Thursday, 5th December, 2024</p>
            <p><strong>Time:</strong> 10:00 AM</p>
            <p><strong>Location:</strong> Jabi Lake, Gwarinpa, FCT, Abuja</p>
         </section>

         <section className="event-box">
            <h4>Rivers State International Cultural Carnival</h4>
            <p><strong>Date:</strong> Friday, 6th December, 2024</p>
            <p><strong>Time:</strong> 10:00 AM</p>
            <p><strong>Location:</strong> Take-off Point: Rivers House, Central Business District, FCT, Abuja</p>
         </section>

         <section className="event-box">
            <h4>Rivers Community End of Year Party (EYP)</h4>
            <p><strong>Date:</strong> Saturday, 7th December, 2024</p>
            <p><strong>Time:</strong> 12:00 Noon (Red Carpet at 11:00 AM)</p>
            <p><strong>Location:</strong> Congress Hall, Transcorp Hilton, Maitama, FCT, Abuja</p>
         </section>
         
         <section className="event-box">
            <h4>Rivers Unplugged Music Concert and Comedy Night</h4>
            <p><strong>Date:</strong> Saturday, 7th December, 2024</p>
            <p><strong>Time:</strong> 7:00 PM (Red Carpet at 6:00 PM)</p>
            <p><strong>Location:</strong> International Conference Centre, Central Business District, Abuja</p>
         </section>

         <section className="event-box">
            <h4>Thanksgiving Service and Prayers for Peace, Unity, and Development</h4>
            <p><strong>Date:</strong> Sunday, 8th December, 2024</p>
            <p><strong>Time:</strong> 10:00 AM</p>
            <p><strong>Location:</strong>  St. Bartholomew's Anglican Cathedral, Kubwa, FCT, Abuja</p>
         </section>
      </section>
    </div>
  );
}

export default AboutSection;
