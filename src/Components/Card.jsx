import React from "react";

const Card = ({ name, text, image, link, date, ...props }) => {
  return (
    <a href={link} className={`block ${props.className}`}>
      <div
        className={`w-full h-auto bg-black shadow-md rounded-lg overflow-hidden transform transition-all duration-200 hover:scale-105 relative group`}
        style={{ aspectRatio: "16/9" }}
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
