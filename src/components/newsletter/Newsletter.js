import React from 'react';
import { MdSend } from 'react-icons/md';
import {
    Container,
    Title,
    Description,
    InputContainer,
    Input,
    Button,
    Wrapper,
} from './NewletterElements';

export const Newsletter = (props) => {
    return (
        <Container bg={props.bg}>
            <Wrapper>
                <Title>Newsletter</Title>
                <Description>
                    Get timely updates from your favorite products .
                </Description>
                <InputContainer>
                    <Input placeholder="Your email" />
                    <Button>
                        <MdSend></MdSend>
                    </Button>
                </InputContainer>
            </Wrapper>
        </Container>
    );
};
