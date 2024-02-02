import { useParams } from "react-router-dom";
import accommodations from "../data/accommodations-data.json";
import Error from "../components/Error";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Accordion from "../components/Accordion";

function AccommodationSheet() {
  const { id } = useParams();
  const selectedAccommodation = accommodations.find((item) => item.id === id);

  // Si l'id est incorrecte, redirection vers la page d'erreur
  if (!selectedAccommodation) {
    return <Error />;
  }

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = selectedAccommodation;

  const hostName = host.name;
  const hostPicture = host.picture;

  // Data qui seront passées en props au composant Accordion
  const accordionData = [
    {
      id: "accDes",
      title: "Description",
      description,
    },
    {
      id: "accEqu",
      title: "Équipements",
      description: (
        <ul className="equipment-list">
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="accommodation-container">
      <Carousel photos={pictures} />
      <div className="accommodation-details-header">
        <div className="title-location-tags">
          <div className="title-location">
            <h1>{title}</h1>
            <p className="location">{location}</p>
          </div>
          <div className="tags">
            {tags.map((tag, index) => (
              <Tag className="tag" key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <p className="host__name">{hostName}</p>
            <img src={hostPicture} alt="Hôte" className="host__picture" />
          </div>
          <div className="rating-stars">
            <Rating starRating={rating} />
          </div>
        </div>
      </div>

      <div className="accommodation-accordions">
        {accordionData.map((item) => (
          <Accordion
            key={item.id}
            title={item.title}
            content={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default AccommodationSheet;
