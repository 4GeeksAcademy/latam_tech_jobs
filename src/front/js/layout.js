import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { isExpired } from "react-jwt";
import { Context } from "./store/appContext";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Login } from "./pages/login";
import { Job } from "./pages/job";
import { Post } from "./pages/post";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SignUp } from "./pages/signup";
import { Apply } from "./pages/apply";
import { Unauthenticated } from "./pages/unauthenticated";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const [token, setToken] = useState()
    const {store, actions} = useContext(Context)
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;
    useEffect(()=>{setToken(localStorage.getItem('jwt-token'))},[])
    const isMyTokenExpired = isExpired(token)
    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Login />} path="/login"/>
                        <Route element={<Job/>} path="/job"/>
                        <Route element={isMyTokenExpired == false ? <Post /> : <Unauthenticated />} path="/post"/>
                        <Route element={<SignUp/>} path="/signup"/>
                        <Route element={<Apply />} path="/apply"/>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
