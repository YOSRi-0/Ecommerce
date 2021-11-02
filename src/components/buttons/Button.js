import styled from 'styled-components';

export const Button = styled.button`
    text-transform: uppercase;
    font-size: 1.25rem;
    font-family: inherit;
    font-weight: 500;
    color: #e9ecef;
    color: ${(props) => (props.theme === 'dark' ? '#e9ecef' : '#343a40')};
    ${'' /* background-color: #343a40; */}
    background-color: ${(props) =>
        props.theme === 'dark' ? '#343a40' : '#e9ecef'};
    border: 2px solid;
    ${
        '' /* border-color: ${(props) =>
        props.theme === 'dark' ? '#343a40' : '#e9ecef'}; */
    }
    border-color: #343a40;
    border-radius: 2px;
    cursor: pointer;

    padding: 1rem 2rem;

    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        ${'' /* color: #343a40; */}
        color: ${(props) => (props.theme === 'dark' ? '#343a40' : '#e9ecef')};
        ${'' /* background-color: #e9ecef; */}
        background-color: ${(props) =>
            props.theme === 'dark' ? '#e9ecef' : '#343a40'};
        border-color: #343a40;
        ${'' /* border: 2px solid; */}
        ${
            '' /* border-color: ${(props) =>
            props.theme === 'dark' ? '#343a40' : '#e9ecef'}; */
        }
    }
`;
