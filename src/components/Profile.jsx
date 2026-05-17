
import profilePic from '../assets/essence-professional.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/githubicon.png';


export function Profile() {
  return (
   <section id="profile">
    
      <div className="section_pic-container">
        <img className="profileimg" src={profilePic} alt="Essence Profile picture" /></div>

      <div className="section_text">
       
        <p className="section_text_p1">Hello I'm </p>
        <h1 className="title">Essence Roberts</h1>
        <p className="section_text_p2">Front End Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('assets/Essence-Resume.pdf')}>Download CV</button>
          <button className="btn btn-color-1" onClick={() => (window.location.href = './#contact')}>Contact Info</button>
      </div>
       
        <div id="socials-container">
          <img src={linkedin} alt="my linkedin icon" className="icon" onClick={() => (window.location.href='https://www.linkedin.com/in/essence-r-2199b993/')} />

          <img src={github} alt="my github profile" className="icon" onClick={() => (window.location.href='https://github.com/essencenroberts?tab=stars')} />
        </div>
      </div>
    </section>
  );
}