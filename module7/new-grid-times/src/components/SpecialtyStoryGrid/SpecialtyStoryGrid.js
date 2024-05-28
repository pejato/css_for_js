import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { COLORS, QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </SportStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  @media ${QUERIES.laptopAndUp} {
    gap: 16px;
    grid-template-areas: 'market sports';
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    grid-area: 'market';
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
    margin-top: -6px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 175px), 1fr));

  @media ${QUERIES.tabletOnly} {
    padding-top: 8px;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
`;

const SportsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    grid-area: 'sports';
    margin-top: -6px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 175px), 1fr));
  
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    overflow: auto;
    gap: 16px;
  }
`;

const SportStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    flex: 1 0 220px;
  }
`

export default SpecialtyStoryGrid;
