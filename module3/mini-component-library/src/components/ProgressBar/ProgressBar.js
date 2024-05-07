/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--wrapper-radius": "4px",
    "--bar-radius": "4px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--wrapper-radius": "4px",
    "--bar-radius": "4px",
    "--padding": "0px",
  },
  large: {
    "--height": "16px",
    "--wrapper-radius": "8px",
    "--bar-radius": "4px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const style = {
    ...SIZES[size],
    "--width": `${Math.min(100, Math.max(0, value))}%`,
  };
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={style}
    >
      <Bar style={style} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: 0px solid transparent;
  border-radius: var(--wrapper-radius);
  box-shadow: inset 0 2px 4px 0 ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: 100%;
  border: 0px solid transparent;
  clip-path: rect(0 0 100% var(--width));
  border-radius: var(--bar-radius);
  display: block;
`;

export default ProgressBar;
