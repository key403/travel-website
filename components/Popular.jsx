import "./Popular.css"
import { popular_locations } from "../constants/constants"
import PopularLocation from "./PopularLocations"

const Popular = () => {
  return (
    <section className="popular section" id="Popular">
      <h2 className="section__title">
        Disfrute de la belleza  <br />
        del Mundo
      </h2>

      <div className="popular__container container grid">
        {popular_locations.map(({img, location, title},i) => (
          <PopularLocation key={title} img={img} location={location} title={title} />
        ))}
      </div>
    </section>
  )
}

export default Popular