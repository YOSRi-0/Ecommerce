import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Form,
  Title,
  Input,
  Link,
  Button,
  Error,
} from "./LoginElements";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.user.isFetching);
  const error = useSelector((state) => state.user.error);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>Sign in</Title>
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Something went wrong</Error>}
          <Link to="/login">Forgot password?</Link>
          <Link to="/login">Create an account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
