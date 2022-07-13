import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  padding: 2rem;
  background-color: ${(props) => {
    return props.color || "white";
  }};
  color: var(--color-heading);
  border-radius: 16px;
`;

const Container = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
