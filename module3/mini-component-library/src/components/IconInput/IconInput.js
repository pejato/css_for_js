import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const strokeWidth = size == "small" ? 1 : 2;
  const iconSize = size == "small" ? 16 : 24;
  const styles = {
    small: {
      "--padding": "4px 0px 4px 24px",
      "--stroke-width": "1px",
      "--font-size": "1rem",
    },
    large: {
      "--padding": "8px 0px 8px 36px",
      "--stroke-width": `${strokeWidth}px`,
      "--font-size": `${18 / 16}rem`,
    },
  }[size];

  return (
    <Wrapper style={{ ...styles, "--width": width + "px" }}>
      <VisuallyHidden>
        <label htmlFor="search-input">{label}</label>
      </VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={iconSize} strokeWidth={strokeWidth}></Icon>
      </IconWrapper>

      <Input
        id="search-input"
        style={styles}
        type="text"
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Input = styled.input`
  border: none;
  padding: var(--padding);
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: 700;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const Wrapper = styled.div`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: var(--font-size);
  width: var(--width);
  border-bottom: var(--stroke-width) solid ${COLORS.black};
  overflow-x: clip;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
  &:focus-within {
    outline-offset: 2px;
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: max-content;
  pointer-events: none;
`;

export default IconInput;
