import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from 'react-google-button'
import { useAuth } from "../store/authContext";


export function Login() {
    const { googleSignIn, user } = useAuth();
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    

    const handleGoogleSignIn = async () => {
        try {
            const googleUser = await googleSignIn();
            if (googleUser.idToken) {
                const response = await fetch("/api/google_login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token: googleUser.idToken }),
                });
                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem("jwt-token", data.authorization);
                    actions.loginUser(); // Update your user context
                    navigate("/");
                } else {
                    console.log(data.message);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const loginClick = async (e) => {
        e.preventDefault();

        if (user) {
            alert('You are already logged in.');
            return;
        }

        const data = await actions.login(email, password);
        if (data) {
            alert('Log in zsuccessful');
            navigate('/');
            window.location.reload(false);
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="col-4  bg-light border rounded border-dark-subtle p-4">
                <form>
                <div className="mb-4 d-flex justify-content-center">
                    <h5><i className="fa-solid fa-user"></i> Login</h5>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label"><i className="fa-solid fa-envelope"></i> Email address</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label"><i className="fa-solid fa-key"></i> Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="inputPassword"/>
                </div>
                <div className="mb-3 d-flex">
                    <a href="#">Forgot password?</a>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <button onClick = {(e)=>{loginClick(e)}} type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Or login with</p>   
                </div>               
                </form>
                <div className="d-flex justify-content-center mb-3">
                    <div className="col-4 d-flex justify-content-between">
                        <GoogleButton onClick={handleGoogleSignIn}/>
                    </div>
                </div>
            </div>
        </div>
    )
}