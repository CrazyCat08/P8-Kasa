import accommodations from "../data/accommodations-data.json";
import Card from "./Card";

function Gallery() {
  return (
    <div className="gallery">
      {accommodations.map(({ id, title, cover }) => (
        <Card key={id} id={id} cover={cover} title={title} />
      ))}
    </div>
  );
}

export default Gallery;
