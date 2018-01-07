import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Background from 'src/components/Background';
import LandingPage from 'src/components/LandingPage';
import VarsityPage from 'src/components/VarsityPage';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Background />
        <Route exact path="/" component={LandingPage} />
        <Route path="/varsity" component={VarsityPage} />
      </div>
    </BrowserRouter>
  );
};
