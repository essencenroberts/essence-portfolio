import arrow from '../assets/down-arrow.png'

export function Experience () {
  return (
     <section id="experience">
      <p className="section_text_p1">Explore My
      </p>
      <h1 className="title">Experience</h1>
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            <article>
              <i className="fa-regular fa-square-check icon" alt="experience icon"></i>

              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <i className="fa-regular fa-square-check icon" alt="experience icon"></i>

              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <i className="fa-regular fa-square-check icon" alt="experience icon"></i>

              <div>
                <h3>JavaScript</h3>
                <p>Basic</p>
              </div>
            </article>
             <article>
              <i className="fa-regular fa-square-check icon" alt="experience icon"></i>

              <div>
                <h3>SEO site structure</h3>
                <p>Experienced</p>
              </div>
            </article>
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            <article>
              <i className="fa-regular fa-square-check icon" alt="experience icon"></i>

              <div>
                <h3>Git</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <i className="fa-regular fa-square-check icon" alt="experience icon"></i>
              <div>
                <h3>Responsive Web Design</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <i className="fa-regular fa-square-check icon" alt="experience icon"></i>
              <div>
                <h3>UI Implementation</h3>
                <p>Basic</p>
              </div>
            </article>
             <article>
              <i className="fa-regular fa-square-check icon" alt="experience icon"></i>
              <div>
                <h3>React</h3>
                <p>Experienced</p>
              </div>
            </article>
          </div>
        </div>
      </div>
       <img
          src={arrow}
          alt="arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href= '#experience')}
        />
    </section>
  )
}