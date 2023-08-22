import "./About.css"
import beachImg from "../src/assets/img/about-beach.jpg"

const About = () => {
  return (
    <section className="about section" id="About">
      <div className="about__container container grid">
        <div className="about__data"> 
          <h2 className="section__title">
            Más Información <br />
            Acerca de Travel
          </h2>

          <p className="about__description">
            Todos los viajes alrededor del mundo son un gran placer y felicidad para cualquiera, disfruta de las vistas cuando viajas por el mundo. Viaja seguro y sin preocupaciones, consigue tu viaje y explora los paraísos del mundo.
          </p>

          <a href="#" className="button">
            Explora Travel <i className="ri-arrow-right-line"></i>
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