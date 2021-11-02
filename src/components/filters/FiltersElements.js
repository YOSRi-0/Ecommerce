import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1600px;
    margin: 0 auto 3rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterText = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const Select = styled.select`
    margin-left: 1rem;
    padding: 0.5rem;

    font-size: 1rem;
    text-transform: capitalize;
`;

export const Option = styled.option``;
