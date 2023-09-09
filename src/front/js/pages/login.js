import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from 'react-google-button'
import { useAuth } from "../store/authContext";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Modal } from 'react-bootstrap'; 
import GoogleSignInButton from '../component/GoogleSignInButton.jsx'

export function Login() {
    /*const { googleSignIn, user } = useAuth();*/
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [login, setLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5MGFkMTE4YTk0MGFkYzlmMmY1Mzc2YjM1MjkyZmVkZThjMmQwZWUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQnlyb24gUm9kcmlndWV6IEFyYWdvbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRlTzl1emRXNFRrNmlFaElJR01HN1pheTBzVnpLOGUydU9QMkZXc0stNFYtQT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9sYXRhbS10ZWNoLWpvYnMiLCJhdWQiOiJsYXRhbS10ZWNoLWpvYnMiLCJhdXRoX3RpbWUiOjE2OTQxMjMxMzYsInVzZXJfaWQiOiJubTBYcDVTRkplUkNCSGRUNmZaOFJzdUxUaXQyIiwic3ViIjoibm0wWHA1U0ZKZVJDQkhkVDZmWjhSc3VMVGl0MiIsImlhdCI6MTY5NDIxMDE5NCwiZXhwIjoxNjk0MjEzNzk0LCJlbWFpbCI6ImJ5cm9uMzAzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTAzMDg4NTM2MzMwMjAxNDI3MjQzIl0sImVtYWlsIjpbImJ5cm9uMzAzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.cdtQJ7ki1-hI8g977mZkD7Zpc89AhKrNrKhymAzXHa14_7kJTxjN3X6zS_3JfXzvwfcJkjgoWcM_UArD_QHAWpvwPzlfrLjK0CT16oF1OtntubOFeLU4Fdwi39Q_poK7fY6wYV1f3NhkNwoo2wcWFCU0-zFnOR35_caSdEKqE8fj_O4wi2ZOGGmjSIH6TipJ9-PEZ-r5hOpL0SoIbqHxzfNY0W-yphcLybJYx3vav_fBdWOUu2cEO35a7tCX0nw3ek9Ht-pZuwyL04GX3i9fDv0-0VTQBfjNk3LhqOkGNJ1TF1gTaBsrTziTGfr9OB3n6l7j-BFdeC8xjiHA1ogRXA"
    
    const google_button_click = async() => {
        const resp = actions.google_sigin(token)
        if (resp){
            navigate("/")
        }
    }
    const handleOpenModal = () => {
      setShowModal(true);
      setIsLoading(false)
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      if (login){
        navigate('/');
      } else {
        navigate('/login')
      }
      
    };

    const handleLoginSuccess = async (response) => {
        // Retrieve the Google Sign-In token
        const googleToken = response.tokenId;
 
        // Send the token to the backend and handle the response
        try {
            const response = await fetch('https://turbo-winner-qpgrrjjrrrx24pwj-3001.app.github.dev/api/auth/google/token', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token_info: googleToken }),
            });
 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
 
            const data = await response.json();
            localStorage.setItem("jwt-token", data.authorization)
        } catch (error) {
            console.error('Error sending token to backend:', error);
        }
    };

    const handleLoginFailure = (error) => {
        // Handle login failure here
        console.error('Login failed:', error);
    };
    /*

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

   */ 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const loginClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = await actions.login(email, password);
        if (data) {
            setLogin(true)
            handleOpenModal()
        } else {
            setLogin(false)
            handleOpenModal()
        }
    };

    return (
        <div className="d-flex justify-content-center mt-4">
{/*Aqui inicia el modal*/}
            <div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>{login ? `Login successfull!` : `Error`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{login ? `You are logged in as ${store.user.user_name}`: `Username or password incorrect try again`}.</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
{/*Aqui termina el modal */}
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
                    <button onClick = {(e)=>{loginClick(e)}} type="submit" className="btn btn-primary">
                    {isLoading ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>) : ('Login')}
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Or login with</p>   
                </div>               
                </form>
                <div className="d-flex justify-content-center mb-3">
                    <div className="col-4 d-flex justify-content-between">
                        <GoogleSignInButton 
                            onLoginSuccess={handleLoginSuccess}
                            onLoginFailure={handleLoginFailure}
                        />
                        {/*
                        <button onClick = {google_button_click} type="submit" className="btn btn-primary">
                            test button
                        </button>                        
                        */}                        
                    </div>
                </div>
            </div>
        </div>
    )
}