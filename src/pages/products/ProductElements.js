import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
    background-color: transparent;
    color: #343a40;
    padding: 4rem 5%;

    ${mobile({ padding: '4rem 3.125%' })}
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1600px;
    ${mobile({ flexDirection: 'column' })};
`;

export const ImgContainer = styled.div`
    flex: 1;
    width: 600px;
    min-width: 400px;
    height: 600px;
    max-height: 600px;

    ${mobile({
        minWidth: '300px',
        maxHeight: '300px',
        height: '300px',
        width: '100%',
    })}
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0 3rem;

    ${mobile({ marginTop: '2rem', padding: '0', width: '100%' })}
`;

export const Title = styled.h1`
    font-weight: 200;
    margin-bottom: 2rem;

    ${mobile({ fontSize: '1.5rem' })}
`;

export const Description = styled.p`
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 1.4;
    font-size: 1rem;

    ${mobile({ marginBottom: '1rem' })}
`;

export const Price = styled.span`
    font-size: 3rem;
    font-weight: 200;

    ${mobile({ fontSize: '2rem' })}
`;

export const FilterContainer = styled.div`
    display: flex;
    margin-top: 2rem;

    ${mobile({ marginTop: '1rem', justifyContent: 'space-between' })}
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;
`;

export const FilterTitle = styled.h3`
    margin-right: 1rem;
    font-size: 1.5rem;
    font-weight: 300;

    ${mobile({ fontSize: '1.25rem' })}
`;
export const FilterColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    cursor: pointer;
    margin-right: 0.5rem;

    ${mobile({ width: '20px', height: '20px' })}
`;
export const FilterSize = styled.select`
    padding: 0.5rem;
    font-size: 1rem;
`;
export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
    display: flex;
    ${'' /* flex-direction: column; */}
    align-items: center;
    justify-content: space-between;

    font-size: 1.5rem;

    margin: 2rem 0;

    ${mobile({
        fontSize: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-between',
    })}
`;
export const AmountContainer = styled.div`
    display: flex;
    align-items: center;

    font-size: 2rem;
    border-radius: 20px;
    border: 1px solid #343a40;
    padding: 0 0.5rem;

    cursor: pointer;

    ${mobile({
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
    })}
`;

export const Amount = styled.span`
    width: 2rem;
    display: flex;
    justify-content: center;
    align-content: center;
    ${mobile({
        width: '1.5rem',
    })}
`;
