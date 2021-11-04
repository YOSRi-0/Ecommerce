import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
    flex: 1;
    margin: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    min-width: 300px;

    overflow: hidden;

`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;

    transition: all 0.25s ease-in-out;

    ${Container}:hover & {
        transform: scale(1.05);
    }

    ${mobile({ margin: '0 auto',maxHeight:'200px'})}
`;

export const Informations = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;

    background-color: transparent;
    cursor: pointer;

    transition: all 0.25s ease-in-out;

    ${Container}:hover & {
        background-color: rgba(52, 58, 64, 0.5);
        opacity: 1;
    }

`;

export const Title = styled.h2`
    margin-bottom: 1rem;

    color: #f8f9fa;
    text-transform: uppercase;
`;
