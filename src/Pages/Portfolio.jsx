import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import Card2 from "../components/Card2";
import Project from "../components/Project";
import { cardData } from "../constants/CardData";

import RedRiver from "../assets/images/RedRiver.jpg";

const Portfolio = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLink, setSelectedLink] = useState([]);
  const [description, setDescription] = useState([]);

  const handleCardClick = (title, image, link, description) => () => {
    setSelectedCard(title);
    setSelectedImage(image);
    setSelectedLink(link);
    setDescription(description);
  };

  useEffect(() => {
    const firstCard = cardData[0];

    setSelectedCard(firstCard.title);
    setSelectedImage(firstCard.image);
    setSelectedLink(firstCard.link);
    setDescription(firstCard.description);
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-3 gap-6 pt-12">
        <div className="flex flex-col col-span-1 bg-blue-100 p-2 text-center rounded-xl">
          <h1 className="font-quicksand font-bold uppercase whitespace-nowrap">
            <span className="text-4xl text-gray-600">Work Experience</span>
          </h1>
          <div className="mt-2 w-full h-full bg-gray-600 rounded-xl p-2">
            <Card
              name="Internship - Pixellriver"
              text={[
                "Student Lead Project",
                "React & Django",
                "Restful API",
                "PostgreSQL",
                "Grafana",
                "Material UI",
              ]}
              image={RedRiver}
              link="https://www.twitch.tv/airijko"
              date="June - August 2023"
            />
            <p>
              <span className="text-md text-white font-grotesk">
                Internship
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col col-span-2 bg-black bg-opacity-50 p-7 rounded-xl">
          {selectedCard && (
            <Project
              title={selectedCard}
              image={selectedImage}
              link={selectedLink}
              description={description}
            />
          )}
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="p-5 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg">
          <h1 className="font-quicksand font-bold uppercase whitespace-nowrap">
            <span className="text-3xl text-orange-400">Projects</span>
          </h1>
          <div className="overflow-x-auto flex flex-row pt-3 bg-cover bg-center whitespace-nowrap gap-5">
            {cardData.map((card) => (
              <Card2
                key={card.title}
                title={card.title}
                tag={card.tag}
                selectedCard={selectedCard}
                onCardClick={handleCardClick(
                  card.title,
                  card.image,
                  card.link,
                  card.description
                )}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
