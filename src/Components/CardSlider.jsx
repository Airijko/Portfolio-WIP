import Card2 from "./Card2";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const CardSlider = ({ cardData, selectedCard, handleCardClick }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container gap-8 p-3">
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
    </div>
  );
};

export default CardSlider;
