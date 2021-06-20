import axios from "axios";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {
  const logout = () => {
    axios.post("/api/logout");
  };

  useEffect(() => logout(), []);

  return <Redirect to="/login" />;
};

export default Logout;
