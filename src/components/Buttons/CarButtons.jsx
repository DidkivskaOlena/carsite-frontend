import React from 'react';
import {Arrow, PrimaryContainer, Title} from "./CarButtonsStyled"
import { useTheme } from 'styled-components'

// eslint-disable-next-line react/prop-types
const PrimaryButton = ({title}) => {
    const theme = useTheme();
    const isDisabled = true;

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

export default PrimaryButton;
