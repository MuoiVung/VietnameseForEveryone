import styled from "styled-components";

const StyledLogin = styled.section`
  /* *,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

    


 */
  .infoform{
    border-top: 5px solid var(--color-primary);
  }

 .infoform h1{
    width:180px;
    font-size: 3rem;
    font-family: var(--font-logo1);
    color: white;
    text-align: center;
    margin: 0;
    background-color: var(--color-primary);
    border-radius: 5px;
    margin-left: 50%;
    transform: translateX(-50%);
    padding:4px;
 }

  header {
    font-size: 1.5rem;
    color: var(--color-primary);
    font-weight: 700;
    text-align: center;
  }

  .body-infor {
    font-family: "Sora", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(253, 226, 249);
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    padding: 1rem 2rem 1rem 2rem;
    font-size: 1.15rem;
  }

  .infoform {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    margin-top: 1.5rem;
    font-weight: 800;
    font-size: 1rem;
    /* test */
    background-color: white;
    padding: 2rem;
    min-width: 500px;
    border-radius: 14px;
    box-shadow: 0px 0px 14px 3px rgb(222, 224, 250);
  }

  label {
    margin-top: 1rem;
  }

  input {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 0.25rem;
    outline: none;
    margin-bottom: 8px;
    border-radius:0;
  }

  button {
    cursor: pointer;
    align-self: flex-end;
    padding: 0.5rem;
    background-color: rgb(104, 187, 255);
    color: white;
    border: none;
    font-size: 1rem;
    border-radius: 8px;
  }

  .errorMsg {
    max-width: 100%;
    font-size: 0.75rem;
    color: rgb(248, 106, 106);
  }
`;

export default StyledLogin;
