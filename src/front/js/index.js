import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./store/authContext"; // Import AuthProvider
import Layout from "./layout";

ReactDOM.render(
  <AuthProvider>
    <Layout />
  </AuthProvider>,
  document.querySelector("#app")
);
