import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid #e6e6e6;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;

  p {
    text-align: left;
    color: #afafaf;
    font-size: 14px;
  }

  div {
    display: flex;
  }

  button {
    display: block;
    color: var(--color-primary);
    font-size: 12px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
  }

  button:hover {
    color: #ffa7a0;
  }

  button::after {
    content: "";
    margin: 0 12px;
    border: 1px solid #afafaf;
    opacity: 0.4;
  }

  button:last-child::after {
    content: "";
    display: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2022. All rights reserved by Vife.</p>
      <div>
        <button>Legal Stuff</button>
        <button>Privacy Policy</button>
        <button>Security</button>
      </div>
    </StyledFooter>
  );
};

export default Footer;
