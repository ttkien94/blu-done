import React from "react";
import Taskbar from "./layout/taskbar";
import Footer from "./layout/footer";
import { Route } from "react-router-dom";
export const HomeTemplate = ({ Component, path, ...restProps }, key) => {
  return (
    <>
      <Route
        key={key}
        exact
        path={path}
        {...restProps}
        render={(...propsRoute) => {
          return (
            <>
              <Taskbar />
              <Component {...propsRoute} />
              <Footer />
            </>
          );
        }}
      ></Route>
    </>
  );
};
