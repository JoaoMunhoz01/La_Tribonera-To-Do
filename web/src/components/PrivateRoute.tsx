import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  const checkAuth = async () => {
    axios.post("/api/auth").then((res) => {
      let success: boolean = res.data;
      setAuth(success);
      setLoading(false);
    });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) {
          return <div></div>;
        } else {
          return auth ? (
            <div>{children}</div>
          ) : (
            <Redirect to={{ pathname: "/login", state: props.location }} />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
