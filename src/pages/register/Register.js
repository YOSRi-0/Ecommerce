import React from 'react';
import {
    Container,
    Wrapper,
    Form,
    Title,
    Input,
    Agreement,
    Button,
} from './RegisterElements';

export const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Form>
                    <Title>Create an account</Title>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, i consent to the processing of
                        my personnal data in accordance to <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>create</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};
