import React from "react";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "core/contexts/AuthContext";
import AlertMessage from "app/component/alertMessage";

function LoginForm() {
  // Context
  const { loginUser } = useContext(AuthContext);

  // Router

  //   local State
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password } = loginForm;
  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);

      if (loginData.success) {
        //   history.push("/dashboard");
      } else {
        setAlert({ color: "red", type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <AlertMessage info={alert} />
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            className="mt-3"
            value={username}
            onChange={onChangeLoginForm}
            required
          />
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            className="mt-3"
            value={password}
            onChange={onChangeLoginForm}
            required
          />
        </Form.Group>
        <Button variant="success" type="submoit" className="mt-3">
          Login
        </Button>
      </Form>
      <p className="mt-3">
        Forgot -{" "}
        <Link to="register">
          <Button variant="info" size="sm" className="ml-2">
            Forgot
          </Button>
        </Link>
      </p>
    </>
  );
}

export default LoginForm;
