import React from "react";

const Card = ({ name, text, image, link, date, xSize, ySize }) => {
  return (
    <a href={link} className="block">
      <div
        className={`w-[${xSize}] h-[${ySize}] bg-black shadow-md rounded-lg overflow-hidden border border-white transform transition-all duration-200 hover:scale-105 relative group`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-all duration-200 opacity-50 hover:opacity-35 hover:scale-110 z-0"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute w-full p-5 bg-opacity-50 h-full transition-all duration-200 pointer-events-none z-10 flex flex-col justify-center group-hover:justify-between items-center group-hover:items-start">
          <h1 className="text-3xl text-white font-bold uppercase">{name}</h1>
          <span className="font-grotesk text-blue-100 opacity-0 group-hover:opacity-100 absolute group-hover:static">
            {Array.isArray(text) ? (
              <ul>
                {text.map((item, index) => (
                  <li key={index} className="slide-in">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              text
            )}
          </span>
          {date && <span>{date}</span>}
        </div>
      </div>
    </a>
  );
};

export default Card;
