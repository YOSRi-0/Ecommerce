import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    background-color: #dee2e6;
    color: #343a40;
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
`;

export const Language = styled.span`
    text-transform: uppercase;
    display: flex;
    align-items: center;
`;

export const IoCaretDownContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(73, 80, 87, 0.5);
    border-radius: 3px;
    padding: 0.5rem 1rem;
    margin-left: 1rem;

    &:hover {
        border: 1px solid rgba(73, 80, 87, 1);
    }
`;

export const Input = styled.input`
    height: 100%;
    outline: none;
    border: none;
    background: transparent;
`;

export const Center = styled.div`
    flex: 1;
    text-align: center;
`;

export const Logo = styled(Link)`
    font-size: 2rem;
    font-family: 'Abril Fatface';
    text-decoration: none;
    color: inherit;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const MenuItem = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    color: inherit;
    margin-right: 2rem;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid #343a40;
    }
`;

export const CartContainer = styled(Link)`
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover {
        transform: scale(1.1);
    }
`;
