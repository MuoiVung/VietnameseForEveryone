import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  font-family: var(--font-text);
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  border: 1px solid var(--color-primary);
  color: ${(props) => (props.fill ? "white" : "#ed6789")};
  background-color: ${(props) => (props.fill ? "#ed6789" : "transparent")};
  transition: all 0.25s ease;
  text-decoration: none;

  &:hover,
  &:active {
    background-color: ${(props) => (props.fill ? "transparent" : "#ed6789")};
    color: ${(props) => (props.fill ? "#ed6789" : "white")};
    cursor: pointer;
  }
`;

export default StyledButton;
