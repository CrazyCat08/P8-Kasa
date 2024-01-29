import { useState } from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

function Carousel({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function previousPhoto() {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  }

  function nextPhoto() {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
  }

  return (
    <div className="carousel">
      {photos.length > 1 && (
        // Affichage du numéro de la photo et des flèches de navigation
        // si il y a plus d'1 photo à montrer
        <>
          <p className="slideCounter">
            {currentIndex + 1} / {photos.length}
          </p>

          <img
            className="leftArrow"
            src={leftArrow}
            alt="Flèche gauche"
            onClick={previousPhoto}
          />
          <img
            className="rightArrow"
            src={rightArrow}
            alt="Flèche droite"
            onClick={nextPhoto}
          />
        </>
      )}

      <img
        className="carousel__img"
        src={photos[currentIndex]}
        alt="Logement"
      />
    </div>
  );
}

export default Carousel;
