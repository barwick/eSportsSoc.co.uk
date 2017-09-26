import React from 'react';
import styled from 'styled-components';
import { media } from 'src/style';

const Container = styled.div`
  display: flex;
  text-align: center;
`;

const Cell = styled.div``;

export default () => {
  return (
    <Container>
      <Cell>News</Cell>
      <Cell>Media</Cell>
      <Cell>Committee</Cell>
      <Cell>Contact</Cell>
    </Container>
  );
};
