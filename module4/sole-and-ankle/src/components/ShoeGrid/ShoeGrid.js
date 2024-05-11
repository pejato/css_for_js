import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCardWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeCardWrapper>
      ))}
      <GhostCard/>
      <GhostCard/>
      <GhostCard/>
      <GhostCard/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

const ShoeCardWrapper = styled.div`
  flex: 1 0 340px;
`;

const GhostCard = styled.div`
  flex: 1 0 340px;
  opacity: 0;
`

export default ShoeGrid;
