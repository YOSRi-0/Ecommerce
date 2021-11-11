import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 800px;
  min-width: 300px;
  padding: 5rem 5%;

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 700px;

  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  text-transform: uppercase;
  align-self: center;
  margin-bottom: 1em;
`;

export const Input = styled.input`
  padding: 0.75em 1.25em;
  margin-bottom: 1.5em;
  width: 100%;
  min-width: 300px;

  outline: none;
  font-size: 1.25rem;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #dee2e6;
  border-radius: 5px;

  &:focus {
    border-color: #343a40;
  }
`;

export const Link = styled(RouterLink)`
  color: inherit;
  font-weight: 500;
  margin-top: 1.25em;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.75em 1.25em;
  width: 100%;

  outline: none;
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
  background-color: #343a40;
  color: #f8f9fa;
  border-radius: 5px;
  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 5px 30px -15px #343a40;
    background-color: #000;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 1rem;
`;
