import linkedin from '../assets/linkedin.png';

export function Contact() {
  return (
     <section id="contact">
      <p className="section_text_p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <i className="fa-solid fa-message icon contact-icon" alt="Email icon"></i>
            <p><a href="mailto:essencenroberts@gmail.com">Essencenroberts@gmail.com</a></p>
          </div>
         
          <div className="contact-info-container">
            <img 
              src={linkedin} alt="my linkedin icon" className="icon contact-icon" /> 
              <p><a href='https://www.linkedin.com/in/essence-r-2199b993/' target="_blank" rel="noreferrer">View My LinkedIn</a></p>
            </div>
          </div>
    </section>
  
  );
}