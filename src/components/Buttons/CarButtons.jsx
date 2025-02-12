import React from 'react';
import {Arrow, ContactContainer, FaqContainer, PageArrow, PrimaryArrow, PrimaryContainer, PrimaryTitle, SecondaryContainer, ServicesContainer, ServicesTitle, Title} from "./CarButtonsStyled"
import { useTheme } from 'styled-components'

// eslint-disable-next-line react/prop-types
export const PrimaryButton = ({title}) => {
    const theme = useTheme();
    const isDisabled = false;

  return (
    <PrimaryContainer 
        href={isDisabled ? null : "#"}
        onClick={isDisabled ? (e) => e.preventDefault() : null}
        disabled={isDisabled}
        theme={theme}>
      <Title className="title" disabled={isDisabled}>{title}</Title>
      <Arrow className="arrow" disabled={isDisabled}>
            <img src="/arrowright.svg" width={22}/>
        </Arrow>
    </PrimaryContainer>
  );
};

export const SecondaryButton = ({title}) => {
    const theme = useTheme();
    const isDisabled = true;

  return (
    <SecondaryContainer 
        href={isDisabled ? null : "#"}
        onClick={isDisabled ? (e) => e.preventDefault() : null}
        disabled={isDisabled}
        theme={theme}>
      <Title className="title" disabled={isDisabled}>{title}</Title>
    </SecondaryContainer>
  );
};

export const ServicesButton = () => {

  return (
    <ServicesContainer>
      <ServicesTitle className="title">Services &
      Price list</ServicesTitle>
      <PageArrow className="page_arrow">
            {/* <img src="/arrowright.svg" width={22} /> */}
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0893 6.31429C0.756504 6.36011 0.5 6.64961 0.5 6.99991C0.5 7.38205 0.80526 7.69184 1.18182 7.69184L13.1666 7.69184L8.83724 12.0678L8.77107 12.1453C8.57247 12.4157 8.59369 12.8002 8.83525 13.0463C9.10096 13.3171 9.53267 13.318 9.79948 13.0483L15.2897 7.49966C15.3225 7.46786 15.3521 7.43279 15.378 7.39496C15.5639 7.12475 15.5377 6.74993 15.2994 6.50922L9.79944 0.951611L9.72283 0.884782C9.45548 0.684378 9.07675 0.707538 8.83521 0.953718C8.56952 1.22452 8.57045 1.66262 8.83729 1.93226L13.1677 6.30797L1.18182 6.30797L1.0893 6.31429Z" fill="#F5F5F5" />
            </svg>
        </PageArrow>
    </ServicesContainer>
  );
};

export const FaqButton = () => {

    return (
      <FaqContainer>
        <PrimaryTitle className="title">FAQ</PrimaryTitle>
        <PrimaryArrow className="faq_arrow">
              {/* <img src="/arrowright.svg" width={22} /> */}
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0893 6.31429C0.756504 6.36011 0.5 6.64961 0.5 6.99991C0.5 7.38205 0.80526 7.69184 1.18182 7.69184L13.1666 7.69184L8.83724 12.0678L8.77107 12.1453C8.57247 12.4157 8.59369 12.8002 8.83525 13.0463C9.10096 13.3171 9.53267 13.318 9.79948 13.0483L15.2897 7.49966C15.3225 7.46786 15.3521 7.43279 15.378 7.39496C15.5639 7.12475 15.5377 6.74993 15.2994 6.50922L9.79944 0.951611L9.72283 0.884782C9.45548 0.684378 9.07675 0.707538 8.83521 0.953718C8.56952 1.22452 8.57045 1.66262 8.83729 1.93226L13.1677 6.30797L1.18182 6.30797L1.0893 6.31429Z" fill="#0B0707" />
              </svg>
          </PrimaryArrow>
      </FaqContainer>
    );
  };

  export const ContactButton = () => {

    return (
      <ContactContainer>
        <PrimaryTitle className="title">Contact us</PrimaryTitle>
        <PrimaryArrow className="contact_arrow">
              {/* <img src="/arrowright.svg" width={22} /> */}
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0893 6.31429C0.756504 6.36011 0.5 6.64961 0.5 6.99991C0.5 7.38205 0.80526 7.69184 1.18182 7.69184L13.1666 7.69184L8.83724 12.0678L8.77107 12.1453C8.57247 12.4157 8.59369 12.8002 8.83525 13.0463C9.10096 13.3171 9.53267 13.318 9.79948 13.0483L15.2897 7.49966C15.3225 7.46786 15.3521 7.43279 15.378 7.39496C15.5639 7.12475 15.5377 6.74993 15.2994 6.50922L9.79944 0.951611L9.72283 0.884782C9.45548 0.684378 9.07675 0.707538 8.83521 0.953718C8.56952 1.22452 8.57045 1.66262 8.83729 1.93226L13.1677 6.30797L1.18182 6.30797L1.0893 6.31429Z" fill="#0B0707" />
              </svg>
          </PrimaryArrow>
      </ContactContainer>
    );
  };

  export const AuctionButton = () => {

    return (
      <ContactContainer>
        <PrimaryTitle className="title">Contact us</PrimaryTitle>
        <PrimaryArrow className="contact_arrow">
              {/* <img src="/arrowright.svg" width={22} /> */}
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0893 6.31429C0.756504 6.36011 0.5 6.64961 0.5 6.99991C0.5 7.38205 0.80526 7.69184 1.18182 7.69184L13.1666 7.69184L8.83724 12.0678L8.77107 12.1453C8.57247 12.4157 8.59369 12.8002 8.83525 13.0463C9.10096 13.3171 9.53267 13.318 9.79948 13.0483L15.2897 7.49966C15.3225 7.46786 15.3521 7.43279 15.378 7.39496C15.5639 7.12475 15.5377 6.74993 15.2994 6.50922L9.79944 0.951611L9.72283 0.884782C9.45548 0.684378 9.07675 0.707538 8.83521 0.953718C8.56952 1.22452 8.57045 1.66262 8.83729 1.93226L13.1677 6.30797L1.18182 6.30797L1.0893 6.31429Z" fill="#0B0707" />
              </svg>
          </PrimaryArrow>
      </ContactContainer>
    );
  };