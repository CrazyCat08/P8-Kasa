import { Link } from "react-router-dom";
import accommodations from "../data/accommodations.json";

function Gallery() {
  return (
    <div className="gallery">
      {accommodations.map((accommodation) => (
        <article className="card" key={accommodation.id}>
          <Link
            to={`/AccommodationSheet/${accommodation.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="card__content">
              <img
                className="card__img"
                src={accommodation.cover}
                alt={accommodation.title}
              />
              <h3 className="card__title">{accommodation.title}</h3>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Gallery;
