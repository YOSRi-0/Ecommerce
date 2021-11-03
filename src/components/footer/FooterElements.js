import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
    background-color: ${(props) => props.bg || 'transparent'};
    padding: 4rem 5%;

    ${mobile({ padding: '4rem 3.125%' })}
`;

export const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;

    max-width: 1600px;

    color: #343a40;

    ${mobile({ flexDirection: 'column' })}
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Logo = styled.h1`
    font-size: 3rem;
    font-family: 'Abril Fatface';

    ${mobile({ fontSize: '2rem' })}
`;

export const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    margin: 1.5rem 0;

    ${mobile({ fontSize: '1rem', margin: '1rem 0' })}
`;

export const SocialContainer = styled.div`
    display: flex;

    ${mobile({ marginBottom: '2rem' })}
`;

export const SocialIcon = styled.div`
    font-size: 2rem;
    cursor: pointer;

    margin-right: 1.5rem;

    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${(props) => props.color};
    }
`;

export const Center = styled.div`
    flex: 1;
    padding-left: 5rem;

    ${mobile({ paddingLeft: '0' })}
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 3.5rem;

    ${mobile({ fontSize: '1.5rem', marginBottom: '1.5rem' })}
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;

    list-style: none;

    ${mobile({ marginBottom: '2rem' })}
`;

export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 0.75rem;

    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    transition: all 0.1s ease-in-out;

    &:hover {
        text-decoration: underline;
        font-weight: 600;
    }
    ${mobile({ fontSize: '1.25rem' })}
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ContactItem = styled.div`
    font-size: 1rem;

    display: flex;
    align-items: center;

    margin-bottom: 0.75rem;

    ${mobile({ fontSize: '1.25rem' })}
`;
