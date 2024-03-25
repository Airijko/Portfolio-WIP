import React from "react";

const Card2 = ({ title, tag, selectedCard, onCardClick, image }) => {
  const handleClick = () => {
    onCardClick(title);
  };

  return (
    <div
      className={`w-64 h-48 rounded-lg overflow-hidden shadow-lg flex-shrink-0 p-2 transform transition-transform duration-200 bg-cover bg-center ${
        selectedCard === title ? "scale-105" : ""
      } relative flex flex-col justify-between`}
      onClick={handleClick}
      style={{
        backgroundImage: `url(${image})`,
        filter: selectedCard === title ? "brightness(100%)" : "brightness(50%)",
      }}
    >
      <div className="mt-auto flex flex-wrap">
        {tag &&
          tag.map((tag, index) => (
            <span
              key={index}
              className="inline-block shadow-lg bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card2;
