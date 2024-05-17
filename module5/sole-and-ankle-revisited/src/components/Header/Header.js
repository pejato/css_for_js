import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileButtons>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1}/>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1}/>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu) }>
            <Icon id="menu" strokeWidth={1}/>
          </UnstyledButton>
        </MobileButtons>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  overflow: auto;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media ${QUERIES.tabletAndDown} {
    gap: 2rem;
  }
  @media ${QUERIES.phoneAndDown} {
    gap: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  white-space: nowrap;
  gap: clamp(
    1.5rem,
    5.9vw - 2rem,
    3rem
  );
  margin: 0px 48px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileButtons = styled.div`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
  } 
  gap: inherit;
`

export default Header;
