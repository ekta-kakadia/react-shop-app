import { Route, Redirect } from "react-router-dom";

function AuthenticatedRoute({ Component, appProps, ...rest }) {
  console.log(appProps);
  return (
    <Route
      {...rest}
      render={(props) =>
        appProps.isAuthenticated ? <Component /> : <Redirect to="/login" />
      }
    />
  );
}

export default AuthenticatedRoute;
