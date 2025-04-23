import React from 'react';
import styled from 'styled-components';

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="loader" />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .loader {
    width: 30px;
    height: 30px;
    border: 2px solid aqua;
    box-shadow:
      0 0 8px aqua,
      0 0 8px aqua inset;
    border-radius: 5px;
    animation: 2s loading ease-in-out infinite;
  }
  @keyframes loading {
    0% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }
    33% {
      transform: rotateX(180deg) rotateY(0) rotateZ(0);
    }
    67% {
      transform: rotateX(180deg) rotateY(180deg) rotateZ(0);
    }
    100% {
      transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
    }
  }`;

export default Loader;
