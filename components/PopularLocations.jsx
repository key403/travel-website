const PopularLocation = ({img, location, title}) => {
  return (
    <article className="popular__card">
      <div className="popular__image">
        <img
          src={img}
          alt="popular image"
          className="popular__img"
        />
        <div className="popular__shadow"></div>
      </div>

      <h2 className="popular__title">{title}</h2>

      <div className="popular__location">
        <i className="ri-map-pin-line"></i>
        <span>{location}</span>
      </div>
    </article>
  );
};

export default PopularLocation;
