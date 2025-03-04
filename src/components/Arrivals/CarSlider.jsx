import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { CarCard, SwiperContainer } from './ArrivalsStyled';

const CarSlider = ({cars}) => {
    const [activeIndex, setActiveIndex] = useState(1);
  
    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
    };
  
    return (
      <SwiperContainer>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Pagination]}
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <CarCard className={activeIndex === index ? 'active' : ''}>
                <div><img src={car.image} alt={car.model} /></div>
                <h3>{car.model}</h3>
                {activeIndex === index && (
                  <div className="car-details">
                    <p>{car.description}</p>
                    <div className="car-photos">
                      {car.additionalPhotos.map((photo, i) => (
                        <img key={i} src={photo} alt={`Additional photo ${i}`} />
                      ))}
                    </div>
                  </div>
                )}
              </CarCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    );
  };
  
  export default CarSlider