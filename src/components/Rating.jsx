import redStar from "../assets/red-star.png";
import greyStar from "../assets/grey-star.png";

function Rating(starRating) {
  const scaleValue = starRating;
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((starElem) =>
        scaleValue >= starElem ? (
          <img key={starElem} src={redStar} alt="" />
        ) : (
          <img key={starElem} src={greyStar} alt="" />
        ),
      )}
    </div>
  );
}

export default Rating;
