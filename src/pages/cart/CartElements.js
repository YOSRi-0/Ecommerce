import styled from 'styled-components';
import { Button } from '../../components/buttons/Button';

export const Container = styled.div`
    padding: 4em 5%;
    text-align: ${(props) => props.align};
`;
export const Wrapper = styled.div`
    max-width: 1600px;

    display: flex;
    flex-direction: column;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TopLinks = styled.div`
    font-size: 1.25rem;
    text-decoration: underline;
    cursor: pointer;
`;

export const TopLink = styled.span`
    margin: 0 1rem;
    text-transform: capitalize;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
`;

export const Info = styled.div`
    flex: 3;
    display: flex;
`;

export const ProductCart = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
`;

export const ProductInfo = styled.div`
    flex: 3;
    display: flex;
`;

export const Image = styled.img`
    width: 200px;
    max-height: 200px;
    object-fit: cover;
`;

export const ProductDetails = styled.div`
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProductName = styled.h3`
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;

    & > b {
        font-weight: 500;
        text-transform: capitalize;
    }
`;

export const ProductId = styled.h3`
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;

    & > b {
        font-weight: 500;
        text-transform: capitalize;
    }
`;

export const ProductColor = styled.h3`
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;

    & > b {
        font-weight: 500;
        text-transform: capitalize;
    }
`;

export const ProductSize = styled.h3`
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;

    & > b {
        font-weight: 500;
        text-transform: capitalize;
    }
`;

export const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PriceAddContainer = styled.div`
    display: flex;
    ${'' /* flex-direction: column; */}
    align-items: center;
    justify-content: space-between;

    font-size: 1.5rem;
`;
export const PriceAmountContainer = styled.div`
    display: flex;
    align-items: center;

    font-size: 2rem;
    border-radius: 20px;
    border: 1px solid #343a40;
    padding: 0 0.5rem;

    cursor: pointer;
`;

export const PriceAmount = styled.span`
    margin: 0 1rem;
`;

export const ProductPrice = styled.div`
    font-size: 2rem;
    font-weight: 300;
    margin-top: 1rem;
`;

export const Summary = styled.div`
    flex: 1;
    white-space: nowrap;
`;

export const SummaryTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1em;
`;

export const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5em 0;
`;

export const SummaryItemText = styled.span`
    font-size: 1.25rem;
    text-transform: capitalize;
`;

export const SummaryItemPrice = styled.span`
    font-size: 1rem;
`;

export const ButtonCheckout = styled(Button)`
    width: 100%;
    margin-top: 1em;
`;
