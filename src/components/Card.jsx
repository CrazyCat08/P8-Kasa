import { Link } from "react-router-dom";

function Card({ id, cover, title }) {
  return (
    <article className="card" key={id}>
      <Link to={`/AccommodationSheet/${id}`}>
        <div className="card__content">
          <img className="card__img" src={cover} alt={title} />
          <h2 className="card__title">{title}</h2>
        </div>
      </Link>
    </article>
  );
}

export default Card;
