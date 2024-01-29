import redStar from "../assets/red-star.png";
import greyStar from "../assets/grey-star.png";

function Rating({ starRating }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((starIndex) =>
        starRating >= starIndex ? (
          <img key={starIndex} src={redStar} alt="Red star" />
        ) : (
          <img key={starIndex} src={greyStar} alt="Grey Star" />
        ),
      )}
    </div>
  );
}

export default Rating;
