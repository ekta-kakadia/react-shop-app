import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "./redux/store";
import Product from "./components/Products";
import Login from "./components/Login";
import { Button } from "antd";
import {
  Switch,
  Route,
  NavLink,
  BrowserRouter,
} from "react-router-dom";
import Admin from "./components/Admin";
import AuthenticatedRoute from "./components/Authenticated";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ProductDetails from "./components/ProductDetails";
import 'antd/dist/antd.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(window.__INITIAL_STATE__);

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("authorized")) {
      userHasAuthenticated(true);
    } else {
      userHasAuthenticated(false);
    }
  }, [isAuthenticated]);

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <div className="App">
          <header className="App-header">
            <span className="fs-3">Shop app</span>
            {localStorage.getItem("authorized") ? (
              <Button
                color="primary"
                outline
                className="float-end cursor-pointer my-2 mx-2"
                onClick={logout}
              >
                Logout
              </Button>
            ) : (
              <Button outline className="float-end cursor-pointer my-2 mx-2">
                <NavLink to="/login">Login</NavLink>
              </Button>
            )}
            <Button type="button" data-toggle="modal" data-target="#myModal" color="primary" outline className="float-end my-2">
              View Cart
            </Button>
            <Button outline className="float-end cursor-pointer my-2 mx-2">
              <NavLink to="/products">Products</NavLink>
            </Button>
            <Button outline className="float-end cursor-pointer my-2 mx-2">
              <NavLink to="/admin">Users</NavLink>
            </Button>
          </header>
          <hr />
          <Switch>
            <AuthenticatedRoute
              path="/products"
              component={Product}
              appProps={{ isAuthenticated }}
            />
            <AuthenticatedRoute
              path="/login"
              component={Login}
              appProps={{ isAuthenticated }}
              exact
            />
            <Route path="/admin" component={Admin}></Route>
            <Route exact path="/product/:id" component={ProductDetails} />
          </Switch>
        </div>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
