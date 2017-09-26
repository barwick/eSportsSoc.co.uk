import React from 'react';
import styled from 'styled-components';
import { media } from 'src/style';

import Background from 'src/components/Background';
import LandingPage from 'src/components/LandingPage';

export default () => {
  return (
    <div>
      <Background />
      <LandingPage />
    </div>
  );
};
