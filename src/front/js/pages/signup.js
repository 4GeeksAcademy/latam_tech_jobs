import React, {useContext, useState, useRef} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export function SignUp(){
    const countries = ['Nicaragua', 'El Salvador', 'Guatemala', 'Costa Rica', 'Colombia', 'Panama', 'Honduras']
    const form = useRef()
    const {actions} = useContext(Context)
    const[username, setUsername] = useState()
    const [company_name, setCompany_name] = useState()
    const [company_description, setCompany_description] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [country, setCountry] = useState()
    const [address, setAddress] = useState()
    const [website, setWebsite] = useState()
    const [linkedin, setLinkedin] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const new_user = {
            "user_name": username,
            "company_name": company_name,
            "company_description": company_description,
            "password": password,
            "phone": phone,
            "email": email,
            "country": country,
            "address": address,
            "website": website,
            "linkedin": linkedin
        }
        const result = await actions.signup(new_user)
        if(result){
            alert("successful sign up") 
            navigate('/login')
            window.location.reload(false); 
        } else {
            alert("Error")
        }
        
    }

    return(
<div className="container-md">
    <form ref={form} className="d-flex flex-column border border-dark-subtle p-4 mt-3 bg-light rounded">
        <div className="d-flex">
            <div className="d-flex flex-column col-6 p-4">
                <div class="mb-3">
                    <label for="inputCompanyName" class="form-label"><i class="fa-regular fa-building"></i> Company Name</label>
                    <input onChange={(e)=>{setCompany_name(e.target.value)}} type="text" class="form-control" id="inputCompanyName" required/>
                    <div class="invalid-feedback">Example invalid form file feedback</div>
                </div>
                <div class="mb-3">
                    <label for="inputFullName" class="form-label"><i class="fa-solid fa-user"></i> Full Name</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" class="form-control" id="inputFullName" required/>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label"><i class="fa-solid fa-envelope"></i> Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" class="form-control" id="inputEmail" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword" class="form-label"><i class="fa-solid fa-key"></i> Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label"><i class="fa-solid fa-key"></i> Repeat Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2" required/>
                </div>
            </div>
            <div className="d-flex flex-column col-6 p-4">
                <div class="mb-3">
                    <label for="inputPhone" class="form-label"><i class="fa-solid fa-phone"></i> Telephone</label>
                    <input onChange={(e)=>{setPhone(e.target.value)}} type="text" class="form-control" id="inputPhone" required/>
                </div>
                <div className="mb-3">
                    <label for="inputCountry" class="form-label"><i class="fa-solid fa-earth-americas"></i> Country</label>
                    <select onChange={(e)=>{setCountry(e.target.value)}} class="form-select" aria-label="Default select example" required>
                        <option selected>Select your country</option>
                        {
                            countries.map((country, id)=>(<option key={id} value={country}>{country}</option>))
                        }
                    </select>
                </div>
                <div class="mb-3">
                    <label for="inputAddress" class="form-label"><i class="fa-solid fa-location-dot"></i> Address</label>
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" class="form-control" id="inputAddress" required/>
                </div>
                <div class="mb-3">
                    <label for="inputWebsite" class="form-label"><i class="fa-solid fa-cloud"></i> Website</label>
                    <input onChange={(e)=>{setWebsite(e.target.value)}} type="text" class="form-control" id="inputWebsite"/>
                </div>
                <div class="mb-3">
                    <label for="inputLinkedIn" class="form-label"><i class="fa-brands fa-linkedin"></i> LinkedIn</label>
                    <input onChange={(e)=>{setLinkedin(e.target.value)}} type="text" class="form-control" id="inputLinkedIn"/>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column">
                <span class="input-group-text">Company Description</span>
                <textarea onChange={(e)=>{setCompany_description(e.target.value)}} class="form-control" aria-label="With textarea" rows="5" required></textarea>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
    )
}