import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 9rem 5%;
    margin: 0 auto;
    text-align: center;

    max-width: 1600px;
`;

export const Title = styled.h1`
    font-size: 3rem;
`;

export const Description = styled.p`
    margin: 2rem 0;
    font-weight: 300;
    font-size: 1.5rem;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    min-width: 320px;
    width: 50%;
    max-width: 450px;
    border: 1px solid #343a40;
`;

export const Input = styled.input`
    padding-left: 1rem;

    font-size: 1rem;
    font-family: inherit;
    outline: none;
    border: none;
    width: 80%;

    &::placeholder {
        color: #343a40;
        font-family: inherit;
    }
`;

export const Button = styled.button`
    height: 100%;
    width: 20%;
    align-self: flex-end;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    background-color: #343a40;
    color: #f8f9fa;
    cursor: pointer;
    outline: none;
    border: 1px solid #343a40;
`;
