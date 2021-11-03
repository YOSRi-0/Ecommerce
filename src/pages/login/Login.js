import React from 'react';
import {
    Container,
    Wrapper,
    Form,
    Title,
    Input,
    Link,
    Button,
} from './LoginElements';

export const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Form>
                    <Title>Sign in</Title>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>Login</Button>
                    <Link>Forgot password?</Link>
                    <Link>Create an account</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};
