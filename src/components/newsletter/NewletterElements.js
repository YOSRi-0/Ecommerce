import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
    background-color: ${(props) => props.bg || 'transparent'};
    padding: 4rem 5%;
    ${mobile({ padding: '4rem 3.125rem' })}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;

    max-width: 1600px;
`;

export const Title = styled.h1`
    font-size: 3rem;

    ${mobile({ fontSize: '2rem' })}
`;

export const Description = styled.p`
    margin: 2rem 0;
    font-weight: 300;
    font-size: 1.5rem;

    ${mobile({ fontSize: '1rem' })}
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    min-width: 300px;
    width: 50%;
    max-width: 450px;
    border: 1px solid #343a40;

    ${mobile({ fontSize: '1rem', height: '40px' })}
`;

export const Input = styled.input`
    padding-left: 1rem;

    font-size: 1rem;
    font-family: inherit;
    outline: none;
    border: none;
    width: 80%;
    background-color: transparent;

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
