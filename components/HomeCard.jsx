
const HomeCard = ({img, title, delay, animation }) => {
  return (
    <article className="home__card">
      <img src={img} alt="home image" className="home__card-img" />
      <h3 className="home__card-title">{title}</h3>
      <div className="home__card-shadow"></div>
    </article>
  );
};

export default HomeCard;
