// clientModules
import AutoScroll from "./app/component/autoScroll";
import Home from "./app/modules/clientModules/home";
import Blog from "./app/modules/clientModules/blog/Blogs";
import BlogDetails from "app/modules/clientModules/blogDetails/BlogDetails";

// homeTemplate
import ErrorPage from "app/modules/errorModules";
import Taskbar from "./template/homeTemplate/layout/taskbar";
import Footer from "./template/homeTemplate/layout/footer";

// adminModules
import Auth from "app/modules/adminModules/auth";
import AuthContextProvider from "core/contexts/AuthContext";

// import Admin from "./template/adminTemplate/index";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import DashBoard from "app/modules/adminModules/dashboard/DashBoard";
import ProtectedRoute from "app/component/routing/ProtectedRoute";

import { publicRoutes } from "./app/config/routes";
import { HomeTemplate } from "./template";
import BlogContextProvider from "core/contexts/BlogContext";

function App() {
  // let location = useLocation();
  // React.useEffect(() => {
  //   console.log(["pageview", location.pathname]);
  // }, [location]);
  // const route = [
  //   { path: "/", Component: Home },
  //   { path: "/blog", Component: Blog },
  //   { path: "/blog-detail", Component: BlogDetails },
  // ];
  return (
    <>
      <AuthContextProvider>
        <BlogContextProvider>
          <Router>
            <AutoScroll />
            <Switch>
              <Route exact path="/">
                <Taskbar />
                <Home />
                <Footer />
              </Route>
              <Route exact path="/blog">
                <Taskbar />
                <Blog />
                <Footer />
              </Route>
              <Route exact path="/blog-detail">
                <Taskbar />
                <BlogDetails />
                <Footer />
              </Route>

              {/* admin template */}

              <Route
                exact
                path="/login"
                render={(props) => <Auth {...props} authRoute="login"></Auth>}
              ></Route>
              <Route
                exact
                path="/register"
                render={(props) => (
                  <Auth {...props} authRoute="register"></Auth>
                )}
              ></Route>
              <ProtectedRoute
                exact
                path="/dashboard"
                component={DashBoard}
              ></ProtectedRoute>

              <HomeTemplate exact path="*" component={ErrorPage} />
            </Switch>
          </Router>
        </BlogContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
