import "./Explore.css"
import exploreBeach from "../src/assets/img/explore-beach.jpg"
import explorePerfil from "../src/assets/img/explore-perfil.png"

const Explore = () => {
  return (
    <section className="explore section" id="Explore">
      <div className="explore__container">
        <div className="explore__image">
          <img src={exploreBeach} alt="explore image" className="explore__img" />
          <div className="explore__shadow"></div>
        </div>

        <div className="explore__content container grid">
          <div className="explore__data">
            <h2 className="section__title">
              Explore The <br />
              Best Paradises
            </h2>

            <p className="explore__description">
              Exploring paradises such as islands and valleys when traveling the worl is one of the greatest experiences when you travel, it offers you harmony and peace and you can enjoy it with great comfort.
            </p>
          </div>

          <div className="explore__user">
            <img src={explorePerfil} alt="" className="explore__perfil" />
            <span className="explore__name">Paul James</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore