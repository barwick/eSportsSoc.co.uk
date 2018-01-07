import React from 'react';
import styled from 'styled-components';
import { media } from 'src/style';

import backgroundImage from 'static/background.png';

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.src});
  background-size: cover;
  position: fixed;
  z-index: -2;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
  position: fixed;
  z-index: -1;
`;

const Cell = styled.div``;

export default () => {
  return (
    <div>
      <BackgroundImage src={backgroundImage} />
      <Overlay />
    </div>
  );
};
