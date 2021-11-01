import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    color: #343a40;
    overflow: hidden;
`;

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    font-size: 2rem;

    background-color: #f8f9fa;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    margin: auto;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #dee2e6;
        box-shadow: 0 3px 5px #0000001a;
        transition: all 0.2s ease-in-out;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
`;

export const Slide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    transform: translateX(${(props) => props.index * -100}vw);

    background-color: ${(props) => props.bg};

    transition: all 0.5s ease-in-out;
`;

export const ImgContainer = styled.div`
    flex: 1;
    height: 100%;

    display: flex;
    justify-content: center;
`;

export const Image = styled.img`
    height: 80%;
    object-fit: cover;
`;

export const TextContainer = styled.div`
    flex: 1;
    padding: 3rem;

    text-transform: uppercase;
`;

export const Title = styled.h1`
    font-size: 3rem;
`;

export const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 500;

    margin: 2rem 0;
`;

export const Button = styled.button`
    text-transform: uppercase;
    font-size: 1.25rem;
    font-family: inherit;
    font-weight: 500;
    color: #e9ecef;
    background-color: #343a40;
    border: 2px solid #343a40;
    border-radius: 2px;
    cursor: pointer;

    padding: 1rem 2rem;

    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #343a40;
        background-color: #e9ecef;
        border: 2px solid #343a40;
    }
`;
