import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div>
        <div
          className="image-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={props.imgUrl} alt={props.imgAlt} className="image" />
          {isHovered && (
            <div className="overlay">
              <h2>{props.title}</h2>
              <p>{props.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
