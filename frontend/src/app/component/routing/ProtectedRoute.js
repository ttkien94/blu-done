import { React, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "core/contexts/AuthContext";
import { Spinner } from "react-bootstrap";
import NavbarMenu from "app/modules/adminModules/NavbarMenu";
function ProtectedRoute({ component: Component, ...rest }) {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  if (authLoading) {
    return (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <NavbarMenu />
            <Component {...props} {...rest} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
  );
}

export default ProtectedRoute;
