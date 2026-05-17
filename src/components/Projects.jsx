import arrow from '../assets/down-arrow.png'
import timekeeper from '../assets/time-keeper-app.png'

export function Projects() {
  return(
    <section id="projects">
    
      <p className="section_text_p1">Browse My Projects</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container"> 
                <img 
                src={timekeeper} 
                alt="Project 1" 
                className="projects-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Clock-In App</h2>
              <p>Time keeping app for small business owner to help collect employee working hours</p>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" 
                onClick={() => (window.location.href='https://github.com/essencenroberts/timekeeper-app.git')}
                >Github
                </button>

                <button className="btn btn-color-2 project-btn" 
                onClick={() => (window.location.href='https://drshellssoulfood.netlify.app')}
                >Live Site
                </button>
              </div>
          </div>

        <div className="experience-details-container">
          <div className="details-container color-container">
            <div className="article-container"> 
              <img 
              src="./assets/notes-app.png" 
              alt="Project 2" 
              className="projects.img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" 
              onClick={() => (window.location.href='https://github.com/')}
              >Github
              </button>

              <button className="btn btn-color-2 project-btn" 
              onClick={() => (window.location.href='https://github.com/')}
              >Live Demo
              </button>
            </div>
          </div>
          </div> 
          <div className="details-container color-container">
            <div className="article-container"> 
              <img 
              src="./assets/project3.png" 
              alt="Project 3" 
              className="projects.img"
              />
              </div>
          

            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" 
              onClick={() => (window.location.href='https://github.com/')}>Github
              </button>
              <button className="btn btn-color-2 project-btn" 
              onClick={() => (window.location.href='https://github.com/')}
              >Live Demo
              </button>
            </div>
          </div>
        </div> 

        <img
        src={arrow}
        alt="arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href='#experience')}
        />  
      </div>   
    </section>
  );
}