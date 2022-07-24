import styled from 'styled-components';

const SButton = styled.button`
    background-color:white;
    color: var(--color-primary);
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 10px;
    cursor: pointer;
    border: solid 1px var(--color-primary);
    &:hover{
        background-color: var(--color-primary);
        color: white;
    }
`;

export default SButton;
