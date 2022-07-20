import styled from "styled-components";

const NotFoundWrapper = styled.main`
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;

  position: relative;

  .content {
    position: absolute;
    top: 10%;
  }

  img {
    display: block;
    width: 90vw;
    max-width: 600px;
    margin-bottom: 2rem;
  }
`;

export default NotFoundWrapper;
