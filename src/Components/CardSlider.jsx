import React, { useEffect } from "react";
import Card2 from "./Card2";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CardSlider = ({ cardData, selectedCard, handleCardClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("scroll", () => {
        const selectedIndex = emblaApi.selectedScrollSnap();
        handleCardClick(selectedIndex);
      });
    }
  }, [emblaApi, handleCardClick]);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
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
              className="embla__slide"
            />
          ))}
        </div>
        <div className="flex flex-row justify-between">
          <button onClick={scrollPrev} className="flex flex-row items-center">
            <IoIosArrowBack size={30} />
            Prev
          </button>
          <button onClick={scrollNext} className="flex flex-row items-center">
            Next
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
