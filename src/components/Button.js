import styled from 'styled-components';

export const Button = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background-color: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    outline: none;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem;
    transition: all 0.5s ease-in-out;
    &:hover {
        outline: none;
        background-color: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`