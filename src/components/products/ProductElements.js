import styled from 'styled-components';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    flex: 1;
    margin: 0.25rem;
    width: auto;
    width: 350px;
    min-width: 350px;
    height: 350px;
    min-height: 350px;

    display: flex;
    overflow: hidden;

    position: relative;

    ${mobile({ minWidth: '300px', maxHeight: '200px' })}
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;

    transition: all 0.25s ease-in-out;

    ${Container}:hover & {
        transform: scale(1.05);
    }
`;

export const Informations = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    width: 100%;
    height: 100%;

    opacity: 0;
    cursor: pointer;

    transition: all 0.25s ease-in-out;

    ${Container}:hover & {
        background-color: rgba(52, 58, 64, 0.5);
        opacity: 1;
    }
`;

export const Icon = styled(Link)`
    width: 40px;
    height: 40px;
    margin: 0.25rem;

    font-size: 1.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f8f9fa;
    color: #343a40;
    border-radius: 50%;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #343a40;
        color: #f8f9fa;
    }
`;
