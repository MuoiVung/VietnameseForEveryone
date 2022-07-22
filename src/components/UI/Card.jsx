import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  color: var(--color-heading);
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
`;

const Card = ({ as, className, children }) => {
  return (
    <StyledCard as={as} className={className}>
      {children}
    </StyledCard>
  );
};

export default Card;
