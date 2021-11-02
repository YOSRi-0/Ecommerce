import styled from 'styled-components';

export const Container = styled.div`
    background-color: transparent;
    color: #343a40;
`;

export const Wrapper = styled.div`
    display: flex;

    padding: 9rem 0;
    margin: 0 auto;
    max-width: 1600px;
`;

export const ImgContainer = styled.div`
    flex: 1;
    width: 100%;
`;

export const Img = styled.img`
    width: 100%;
    height: 90vh;
    min-height: 600px;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0 3rem;
`;

export const Title = styled.h1`
    font-weight: 200;
    margin-bottom: 2rem;
`;

export const Description = styled.p`
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 1.4;
    font-size: 1rem;
`;

export const Price = styled.span`
    font-size: 3rem;
    font-weight: 200;
`;

export const FilterContainer = styled.div`
    display: flex;
    margin-top: 2rem;
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
`;
export const FilterColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    cursor: pointer;
    margin-right: 0.5rem;
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
`;
export const AmountContainer = styled.div`
    display: flex;
    align-items: center;

    font-size: 2rem;
    border-radius: 20px;
    border: 1px solid #343a40;
    padding: 0 0.5rem;

    cursor: pointer;
`;

export const Amount = styled.span`
    margin: 0 1rem;
`;
