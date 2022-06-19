import { Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
// import { Input,Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAPI } from "../Redux/auth/auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAPI(loginCreds));
  };

  useEffect(() => {
    if (isAuth) {
      navigate( "/", { replace: true });
      // location.state.pathname ||
    }
  }, [navigate, isAuth,location]);
  return (
    <div>
      <Heading color={"#ecc94b"}>LOGIN</Heading>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <Input
          name="email"
          type="email"
          placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
        />
        <Button data-cy="login-submit" type="submit" bg={"#ecc94b"}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
