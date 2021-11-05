import React from "react";
import {
	Container,
	Wrapper,
	Form,
	Title,
	Input,
	Link,
	Button,
} from "./LoginElements";

export const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Form>
					<Title>Sign in</Title>
					<Input placeholder="username" />
					<Input placeholder="password" />
					<Button>Login</Button>
					<Link to="/login">
						Forgot password?
					</Link>
					<Link to="/login">
						Create an account
					</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};
