import React, { useState } from 'react';
import { About, ArrowButton, CarId, Description, DescriptionComponent, Details, FirstIndicator, MainImage, MainImageContainer, SecondIndicator, Slide, SliderContainer, SlidesWrapper, ViewPortContainer } from './ArrivalsStyled';

const Slider = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : slides.length - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex < slides.length - 1 ? prevIndex + 1 : 0
        );
    };

    return (
        <SliderContainer>
            <ArrowButton onClick={handlePrev}>
                <img src="/arrowleft.png" alt="Previous" />
            </ArrowButton>
            <ViewPortContainer>
              <SlidesWrapper activeIndex={activeIndex}>
                  {slides.map((slide, index) => (
                      <Slide key={index} isActive={activeIndex === index}>
                            <MainImageContainer isActive={activeIndex === index}>
                                <CarId>ID: {slide.number}</CarId>
                                <MainImage
                                        src={slide.image}
                                        alt={`Slide ${index}`}
                                        isActive={activeIndex === index}
                                    />
                            </MainImageContainer>
                            
                              <Details isActive={activeIndex === index}>
                              {slide.additionalPhotos.map((photo, i) => (
                                <img key={i} src={photo} alt={`Additional photo ${i}`} />
                              ))}
                            </Details>
                          <Description isActive={activeIndex === index}>
                                <h3>{slide.model}</h3>
                                <DescriptionComponent>
                                  <div className="indicator">
                                      <h4>Price incl. 21% VAT</h4>
                                      <FirstIndicator>{slide.pricevat} €</FirstIndicator>
                                      <SecondIndicator>{slide.pricevatsale} €</SecondIndicator>
                                  </div>
                                  <div className="indicator">
                                      <h4>Net price excl. VAT</h4>
                                      <FirstIndicator>{slide.netprice} €</FirstIndicator>
                                      <SecondIndicator>{slide.netprice} €</SecondIndicator>
                                  </div>
                                  <div className="indicator">
                                      <h4>Monthly financing from</h4>
                                      <SecondIndicator>{slide.monthlyfinancing} €</SecondIndicator>
                                  </div>
                                </DescriptionComponent>
                                <About>{slide.release} - {slide.gearbox} - {slide.mileage} km</About>
                            </Description>
                      </Slide>
                  ))}
              </SlidesWrapper>
            </ViewPortContainer>
            <ArrowButton onClick={handleNext}>
             <img src="/arrowright.png" alt="Previous" />
            </ArrowButton>
        </SliderContainer>
    );
};

export default Slider;
