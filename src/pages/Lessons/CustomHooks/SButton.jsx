import styled from 'styled-components';

const SButton = styled.button`
    background-color:white;
    color: var(--color-primary);
    border-radius: 5px;
    padding: 4px 8px;
    margin: 0 10px;
    cursor: pointer;
    padding: 0 20px;
    line-height: 30px;
    border: solid 1px var(--color-primary);
    margin-top: 0 ;
    &:hover{
        background-color: var(--color-primary);
        color: white;
    }
`;

export default SButton;
