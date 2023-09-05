import React, {useContext, useState, useRef} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Modal } from 'react-bootstrap'; 

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
    const [showModal, setShowModal] = useState(false);
    const [signup, setSignup] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
      setIsLoading(false)
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      if (signup){
        navigate('/login');
        /*window.location.reload(false);*/
      } else {
        navigate('/signup')
      }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setIsLoading(true)
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
            setSignup(true)
            handleOpenModal()
        } else {
            setSignup(false)
            handleOpenModal()
        }
        
    }

    return(
<div className="container-md">
{/*Aqui inicia el modal*/}
        <div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>{signup ? `You have sucessfully sign up!` : `Error`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{signup ? `Welcome to Latam Tech Jobs!`: `Incorrect or missing information try again`}.</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
{/*Aqui termina el modal */}
    <form ref={form} className="d-flex flex-column border border-dark-subtle p-4 mt-3 bg-light rounded">
        <div className="d-flex">
            <div className="d-flex flex-column col-6 p-4">
                <div className="mb-3">
                    <label htmlFor="inputCompanyName" className="form-label"><i className="fa-regular fa-building"></i> Company Name</label>
                    <input onChange={(e)=>{setCompany_name(e.target.value)}} type="text" className="form-control" id="inputCompanyName" required/>
                    <div className="invalid-feedback">Example invalid form file feedback</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputFullName" className="form-label"><i className="fa-solid fa-user"></i> Full Name</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" className="form-control" id="inputFullName" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label"><i className="fa-solid fa-envelope"></i> Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" className="form-control" id="inputEmail" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label"><i className="fa-solid fa-key"></i> Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label"><i className="fa-solid fa-key"></i> Repeat Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" required/>
                </div>
            </div>
            <div className="d-flex flex-column col-6 p-4">
                <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label"><i className="fa-solid fa-phone"></i> Telephone</label>
                    <input onChange={(e)=>{setPhone(e.target.value)}} type="text" className="form-control" id="inputPhone" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputCountry" className="form-label"><i className="fa-solid fa-earth-americas"></i> Country</label>
                    <select onChange={(e)=>{setCountry(e.target.value)}} className="form-select" aria-label="Default select example" required>
                        <option selected>Select your country</option>
                        {
                            countries.map((country, id)=>(<option key={id} value={country}>{country}</option>))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label"><i className="fa-solid fa-location-dot"></i> Address</label>
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" className="form-control" id="inputAddress" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputWebsite" className="form-label"><i className="fa-solid fa-cloud"></i> Website</label>
                    <input onChange={(e)=>{setWebsite(e.target.value)}} type="text" className="form-control" id="inputWebsite"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputLinkedIn" className="form-label"><i className="fa-brands fa-linkedin"></i> LinkedIn</label>
                    <input onChange={(e)=>{setLinkedin(e.target.value)}} type="text" className="form-control" id="inputLinkedIn"/>
                </div>
            </div>
        </div>
        <div className="d-flex flex-column">
                <span className="input-group-text">Company Description</span>
                <textarea onChange={(e)=>{setCompany_description(e.target.value)}} className="form-control" aria-label="With textarea" rows="5" required></textarea>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <button onClick={handleSubmit} type="submit" class="btn btn-primary">
            {isLoading ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>) : ('Submit')}
            </button>
        </div>
    </form>
</div>
    )
}