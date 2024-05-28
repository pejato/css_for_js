import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    gap: 16px;
    grid-template-columns: 5fr 2.5fr;
    grid-template-areas: 
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }
  @media ${QUERIES.laptopAndUp} {
    gap: 16px;
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
  }
`

const StoryWrapper = styled.div`
  padding-bottom: 14px;
  &:not(:first-of-type) {
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 16px;
  }
`

const OpinionStoryWrapper = styled.div`
  padding-bottom: 14px;
  &:not(:first-of-type) {
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 16px;
  }
  @media ${QUERIES.tabletOnly} {
    flex: 1;
    padding-bottom: 0;
    &:not(:first-of-type) {
      padding-top: 0;
      border-top: none;
    }
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 16px;
    padding-bottom: 6px;
  }
`;

export default MainStoryGrid;
