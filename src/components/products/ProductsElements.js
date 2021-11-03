import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.bg || 'transparent'};
    text-align: ${(props) => props.align};
    padding: 4rem 5%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;

    max-width: 1600px;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 4rem;
    color: #343a40;
    max-width: 1600px;
    margin: 0 auto 3rem;
`;
