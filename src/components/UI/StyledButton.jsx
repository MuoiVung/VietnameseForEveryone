import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  font-family: var(--font-text);
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  transition: all 0.25s ease;
  background-color: transparent;
  text-decoration: none;

  &:hover,
  &:active {
    background-color: var(--color-primary);
    color: var(--color-text);
    cursor: pointer;
  }
`;

export default StyledButton;
