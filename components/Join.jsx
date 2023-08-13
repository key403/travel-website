import "./Join.css"
import joinIsland from "../src/assets/img/join-island.jpg"

const Join = () => {
  return (
    <section className="join section">
      <div className="join__container container grid">
        <div className="join__data" >
          <h2 className="section__title">
            Your Journey <br />
            Starts Here
          </h2>

          <p className="join__description">
            Get up to date with the lastest travel and information from us.
          </p>

          <form className="join__form">
            <input type="email" placeholder="Enter your email" className="join__input" />
            <button className="join__button button">
              Subscribe To Our Newsletter <i className="ri-arrow-right-line"></i>
            </button>
          </form>
        </div>

        <div className="join__image">
          <img src={joinIsland} alt="join image" className="join__img" />
          <div className="join__shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default Join