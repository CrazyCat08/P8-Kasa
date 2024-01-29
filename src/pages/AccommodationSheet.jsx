import { useParams, Navigate } from "react-router-dom";
import accommodations from "../data/accommodations-data.json";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Accordion from "../components/Accordion";

function AccommodationSheet() {
  const { id } = useParams();
  const selectedAccommodation = accommodations.find((item) => item.id === id);

  if (!selectedAccommodation) {
    <Navigate to="*" />;
    // return <Error />;
  }

  const { title, description, host, rating, location, equipments, tags } =
    selectedAccommodation;
  const hostName = host.name;
  const hostPicture = host.picture;

  // Création d'un JSON pour le faire passer en props au composant Accordion
  const accordionData = [
    {
      title: "Description",
      description,
    },
    {
      title: "Équipements",
      description: equipments.map((equipment, index) => (
        <ul className="content-text equipment-list" key={index}>
          <li>{equipment}</li>
        </ul>
      )),
    },
  ];

  return (
    <section className="accommodationContainer">
      <Carousel photos={selectedAccommodation.pictures} />
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

      <div className="housing-accordions">
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
