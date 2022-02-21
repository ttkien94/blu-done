import React from "react";
import "./styles/styles.scss";
import LoginForm from "app/component/auth/LoginForm.js";
import RegisterForm from "app/component/auth/RegisterForm.js";
import { AuthContext } from "core/contexts/AuthContext";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
// import Spinner from "react-bootstrap/spinner";

function Auth({ authRoute }) {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        {/* <Spinner animation="border" variant="info" /> */}
      </div>
    );
  } else if (isAuthenticated) return <Redirect to="/dashboard" />;
  else {
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );
  }
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Login</h1>
          {body}
        </div>
      </div>
    </div>
  );
}

export default Auth;
