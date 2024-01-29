import React, { useState } from "react";
import upArrow from "../assets/arrow-up.svg";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion__header">
        <div className="accordion__title">{title}</div>
        <div className={`accordion__icon ${isOpen ? "rotate" : ""}`}>
          <img
            src={upArrow}
            alt="Flèche pointant vers le haut"
            onClick={handleToggle}
          />
        </div>
      </div>
      <div className={`accordion__content ${isOpen ? "open" : ""}`}>
        <div className="content-text">{content}</div>
        {/* <div className="description-text">{description}</div> */}
      </div>
    </div>
  );
}

export default Accordion;
