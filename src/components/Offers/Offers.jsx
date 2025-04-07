import { useState } from "react";
import { PrimaryButton, SecondaryButton, ServicesButton } from "../Buttons/CarButtons";
import { Button, ButtonsContainer, CommentItemOff, Image, OffersContainer, Slide, SlideContent, TitleItemOff, TitleOff } from "./OffersCompStyle";
import { useEffect } from "react";

const Offers = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { h3: 'Auto Service & Repair', text: 'Cars from top auctions: selected for condition, price, and reliability. History checks, legal compliance, and city delivery included.', image: '/offerone.png',  },
    { h3: 'BMW Car Service', text: 'Cars from top auctions: selected for condition, price, and reliability. History checks, legal compliance, and city delivery included.', image: '/offersecond.png',  },
    { h3: 'Car Selection Through Auctions', text: 'Cars from top auctions: selected for condition, price, and reliability. History checks, legal compliance, and city delivery included.', image: '/offerthree.png',  },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 60000); // 60000 мс = 1 хвилина

    return () => clearInterval(interval); // Очищаємо інтервал при розмонтуванні компонента
  }, [slides.length]);

  return (
    <OffersContainer>
      <TitleOff>Services We Offer</TitleOff>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          isActive={index === activeSlide}
        >
          <SlideContent>
            <TitleItemOff>{slide.h3}</TitleItemOff>
            <CommentItemOff>{slide.text}</CommentItemOff>
            <SecondaryButton title={"View More"}></SecondaryButton>
          </SlideContent>
          <Image src={slide.image} alt={`Слайд ${index + 1}`} />
        </Slide>
      ))}

      <ButtonsContainer>
        <PrimaryButton title={"Explore Our Services"} isDisabled={false}></PrimaryButton>
          {slides.map((_, index) => (
            <Button
              key={index}
              onClick={() => setActiveSlide(index)}
              isActive={index === activeSlide}
            >
              {index + 1}
            </Button>
          ))}
      </ButtonsContainer>
        
        
        
        
        
    </OffersContainer>
  );
}

export default Offers;