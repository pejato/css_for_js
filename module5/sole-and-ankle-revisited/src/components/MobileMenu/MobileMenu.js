/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  const menuLeftShift = 75;
  return (
    <Overlay 
      isOpen={isOpen}
      onDismiss={onDismiss}
    > 
      <Content style={{"--menu-left-shift": menuLeftShift + "px"}}>
        <ButtonWrapper style={{"--menu-left-shift": menuLeftShift + "px"}}>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" color={COLORS.gray[900]} strokeWidth={2} />
          </UnstyledButton>
        </ButtonWrapper>

        <Side/>
        <NavWrapper>
          <MenuLink href="/sale">Sale</MenuLink>
          <MenuLink href="/new">New&nbsp;Releases</MenuLink>
          <MenuLink href="/men">Men</MenuLink>
          <MenuLink href="/women">Women</MenuLink>
          <MenuLink href="/kids">Kids</MenuLink>
          <MenuLink href="/collections">Collections</MenuLink>
        </NavWrapper>
          <FooterWrapper>
            <MenuLink href="/terms">Terms and Conditions</MenuLink>
            <MenuLink href="/privacy">Privacy Policy</MenuLink>
            <MenuLink href="/contact">Contact Us</MenuLink>
          </FooterWrapper>
      </Content>
    </Overlay>
  );
};

const ButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: calc(var(--menu-left-shift) + 16px);
`

const MenuLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Side = styled.div`
  flex: 1;
`
const Overlay = styled(DialogOverlay)`
  position: fixed;
  background-color: hsl(var(--color-gray-700) / 80%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Content = styled(DialogContent)`
  font-family: 'Raleway', sans-serif;
  position: relative;
  left: var(--menu-left-shift);
  background-color: white;
  height: 100%;
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  & > a {
    font-size: ${18 / 16}rem;
    font-weight: 600;
    color: hsl(var(--color-gray-900));
    text-transform: uppercase;
    line-height: 1.125rem;
  }
  & > a:first-of-type {
    color: hsl(var(--color-secondary))
  }
`

const FooterWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 14px;
  & > a {
    font-size: ${14 / 16}rem;
    color: hsl(var(--color-gray-700));
  }
`

export default MobileMenu;
