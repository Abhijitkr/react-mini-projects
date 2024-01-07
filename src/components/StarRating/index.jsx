import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getIndex) => {
    setRating(getIndex);
  };
  const handleMouseEnter = (getIndex) => {
    setHover(getIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  const stars = [...Array(noOfStars)].map((_, index) => {
    index += 1;
    return (
      <FaStar
        key={index}
        className={index <= (hover || rating) ? "active" : "not-active"}
        size={40}
        onClick={() => handleClick(index)}
        onMouseMove={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      />
    );
  });

  return <div className="stars">{stars}</div>;
}
