import { useParams } from "react-router-dom";
import accommodations from "../data/accommodations.json";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import Tag from "../components/Tag";

const AccommodationSheet = () => {
  const { id } = useParams();
  const selectedData = accommodations.find((item) => item.id === id);

  // if (!selectedData) {
  // }

  const { title, location, host, tags, rating, description, equipments } =
    selectedData;
  const hostName = host.name;
  const hostPic = host.picture;
  const data = [
    {
      title: "Description",
      description,
    },
    {
      title: "Équipements",
      description: equipments.map((equipment) => (
        <p className="equipment-text" key={equipment}>
          {equipment}
          <br />
        </p>
      )),
    },
  ];

  return (
    <div>
      {/* <Carousel pictures={selectedData.pictures} title={selectedData.title} /> */}
      <div className="accommodationHost">
        <div className="accommodationTag">
          <div className="accommodationTitle">
            <h1>{title}</h1>
            <p className="accommodation">{location}</p>
          </div>
          <div className="tags">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className="hostRating">
          <div className="host">
            <p className="hostName">{hostName}</p>
            <img src={hostPic} alt="Hôte" className="hostImg" />
          </div>
          <div className="ratings">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
      <div className="accordion-main">
        {data.map((item) => (
          <Accordion
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AccommodationSheet;
