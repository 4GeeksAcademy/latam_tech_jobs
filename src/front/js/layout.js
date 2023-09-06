import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { isExpired } from "react-jwt";
import { Context } from "./store/appContext";
import injectContext from "./store/appContext";
import { Login } from "./pages/login";
import { Job } from "./pages/job";
import { Post } from "./pages/post";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SignUp } from "./pages/signup";
import { Apply } from "./pages/apply";
import { AuthProvider, useAuth } from "./store/authContext";
import { Unauthenticated } from "./pages/unauthenticated";
import { Home } from "./pages/home"; 
import CreateCV from "./pages/createCV";


const Layout = () => {
  const [token, setToken] = useState();
  const { store } = useContext(Context)
  const { user: googleUser } = useAuth(); 
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") {
    return <BackendURL />;
  }

  useEffect(() => {
    setToken(localStorage.getItem("jwt-token"));
  }, []);

  const isMyTokenExpired = isExpired(token);

  return (
    <div id="light">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <AuthProvider>
            <Navbar />
            <Routes >
              <Route element={<Home />} path="/" />
              <Route element={<h1>Not found!</h1>} />
              <Route element={<CreateCV />} path="/createcv" />
              <Route element={<Login />} path="/login" />
              <Route element={<Job />} path="/job/:id" />
              <Route
                element={
                  store.user || googleUser ? (
                    <Post />
                  ) : (
                    <Unauthenticated />
                  )
                }
                path="/post"
              />
              <Route element={<SignUp />} path="/signup" />
              <Route element={<Apply />} path="/apply/:id" />
            </Routes>
            <Footer />
          </AuthProvider>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
