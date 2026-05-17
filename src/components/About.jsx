
import arrow from '../assets/down-arrow.png'

export function About() {
  return (
    <section id="about">
    
      <p className="section_text_p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        
        <div className="about-details-container">
          <div className="about-containers">
            
            <div className="details-container">
              <i className="fa-solid fa-briefcase icon"></i>

              <h3>Experience</h3>
              <p>2+ years <br/> Frontend Development</p><br/>
            </div>

             <div className="details-container">
              <i className="fa-solid fa-graduation-cap icon"></i>

              <h3>Education</h3>
              <p>B.A Sociology</p> <br/>

            </div>
            <div className="text-container"><p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae adipisci expedita magnam magni quidem vel eos tempora itaque ducimus dignissimos assumenda repellendus est, necessitatibus temporibus cum labore commodi amet molestias!
            </p>
            </div>

          </div>
        </div>

        <img
          src={arrow}
          alt="arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href= '#experience')}
        />
     </div>   
    </section>
  );   
}