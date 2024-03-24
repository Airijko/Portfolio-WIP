import React from "react";

const Card2 = ({ title, tag }) => {
  return (
    <div className="w-[200px] h-[200px] rounded overflow-hidden shadow-lg m-4 flex-shrink-0">
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">{title}</h1>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tag &&
          tag.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card2;
