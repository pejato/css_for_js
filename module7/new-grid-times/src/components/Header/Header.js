import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { COLORS, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const SubscribeButton = () => {
  return (
    <Button>Subscribe</Button>
  )
}

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopHeaderButtons>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopHeaderButtons>
        <Logo />
        <DesktopSubscribeButton>
          <SubscribeButton />
          <a href="/">Already a subscriber?</a>
        </DesktopSubscribeButton>
      </MainHeader>
    </header>
  );
};

const DesktopHeaderButtons = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: revert;
  } 
`;

const DesktopSubscribeButton = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
    & > a {
      width: 100%;
      text-align: center;
      font-size: 0.875rem;
      font-style: italic;
      margin-top: 8px;
      text-decoration: underline;
      position: absolute;
      color: ${COLORS.gray[900]}
    }
  } 
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    justify-content: revert;
    justify-items: start;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
