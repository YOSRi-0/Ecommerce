import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
    padding: 0.5rem;
    background-color: #343a40;
    color: #f8f9fa;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mobile({ textAlign: 'center', fontSize: '.9rem' })}
`;
