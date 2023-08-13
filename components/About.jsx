import "./About.css"
import beachImg from "../src/assets/img/about-beach.jpg"

const About = () => {
  return (
    <section className="about section" id="About">
      <div className="about__container container grid">
        <div className="about__data"> 
          <h2 className="section__title">
            Learn More <br />
            About Travel
          </h2>

          <p className="about__description">
            All the trips around the world are a great pleasure and happiness for anyone, enjoy the sights when you travel the world. Travel safely and without worries, get your trip and explore the paradises of the world.
          </p>

          <a href="#" className="button">
            Explore Travel <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="about__image">
          <img src={beachImg} className="about__img" alt="about image" />
          <div className="about__shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default About