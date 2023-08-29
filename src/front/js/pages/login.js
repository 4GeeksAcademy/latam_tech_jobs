import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export function Login(){
    const {store, actions} = useContext(Context)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const loginClick = async (e)=>{
        e.preventDefault()
        const data = await actions.login(email, password)
        if(data){
            alert('Log in successfull')
            navigate('/')
            window.location.reload(false);
        } else {
            alert('login fail')
    }
}
    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="col-4  bg-light border rounded border-dark-subtle p-4">
                <form>
                <div class="mb-4 d-flex justify-content-center">
                    <h5><i class="fa-solid fa-user"></i> Login</h5>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label"><i class="fa-solid fa-envelope"></i> Email address</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="inputPassword" class="form-label"><i class="fa-solid fa-key"></i> Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control" id="inputPassword"/>
                </div>
                <div class="mb-3 d-flex">
                    <a href="#">Forgot password?</a>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <button onClick = {(e)=>{loginClick(e)}} type="submit" class="btn btn-primary">Login</button>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Or login with</p>   
                </div>               
                </form>
                <div class="d-flex justify-content-center mb-3">
                    <div className="col-4 d-flex justify-content-between">
                        <button class="btn btn-outline-danger" type="button"><i class="fa-brands fa-google"></i></button>
                        <button className="btn btn-outline-primary" type="button"><i class="fa-brands fa-linkedin"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}