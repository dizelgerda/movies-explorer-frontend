import './MoviesCard.css'

function MoviesCard({ title, subtitle, link, isLike }) {
  return (
    <li className="card">
      <div className="card__container">
        <h2 className="card__title">{title}</h2>
        <p className="card__subtitle">{subtitle}</p>
        <button type="button" className={`card__like ${isLike ? "card__like_active" : ""}`}></button>
      </div>
      <img src={link} alt={`Постер фильма ${title}`} className="card__image" />
    </li>
  );
}

export default MoviesCard;
