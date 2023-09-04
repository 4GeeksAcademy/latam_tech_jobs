import React, {useRef, useContext, useEffect} from "react";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const Apply = () => {
    const form = useRef()
    const navigate = useNavigate()
    const { store, actions } = useContext(Context);
    const params = useParams()
    useEffect(()=>{actions.get_single_job(params.id)},[])

    const sendEmail = (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_jop1cgf', 'template_idqa88j', form.current, 'xL0_Kaj6hkNyykj5i')
        .then((result) => {
            console.log(result.text);
            form.current.reset()
            alert('Your message was sent to the Hiring Manager') 
            navigate('/')
        }, (error) => {
            console.log(error.text);
            alert('Error')
        });
    };
    return (
        <form ref={form} onSubmit={sendEmail} className="container-md d-flex flex-column justify-content-center border border-dark-subtle p-4 mt-3 bg-light rounded">
            <div className="row g-3 justify-content-center mb-5">
                <div className="col-12">
                    <p className="text-center fs-4 text">You are applying to the <strong>{store.single_job.job_title}</strong> job at <strong>{store.single_job.company_name}</strong>!</p>
                </div>
            </div>
            <div className="row g-3 justify-content-around mb-3">
                <div className="col-3">
                    <label for="inputPassword6" className="col-form-label"><i className="fa-solid fa-suitcase"></i> Resume/CV</label>
                </div>
                <div className="col-6">
                    <input type="file" className="form-control" aria-label="file example" required/>
                </div>
            </div>
            <div className="row g-3 justify-content-around  mb-3">
                <div className="col-3">
                    <label for="nameInput" className="col-form-label"><i className="fa-solid fa-user"></i> Full name</label>
                </div>
                <div className="col-6">
                    <input name="applicant_name" type="text" className="form-control" id="nameInput" placeholder="John Doe" required/>
                </div>
            </div>
            <div className="row g-3 justify-content-around mb-3">
                <div className="col-3">
                    <label for="emailInput" className="col-form-label"><i className="fa-solid fa-envelope"></i> Email</label>
                </div>
                <div className="col-6">
                    <input name="applicant_email" type="text" className="form-control" id="emailInput" placeholder="name@email.com" required/>
                </div>
            </div>
            <div className="row g-3 justify-content-around mb-3">
                <div className="col-3">
                    <label for="phoneInput" className="col-form-label"><i className="fa-solid fa-phone"></i> Phone</label>
                </div>
                <div className="col-6">
                    <input name="applicant_phone" type="text" className="form-control" id="phoneInput" placeholder="000-000-0000" required/>
                </div> 
            </div>   
            <div className="row g-3 justify-content-around mb-3">
                <div className="col-3">
                    <label for="companyInput" className="col-form-label"><i className="fa-solid fa-building"></i> Current Company</label>
                </div>
                <div className="col-6">
                    <input name="applicant_company" type="text" className="form-control" id="companyInput" placeholder="Company name" required/>
                </div>  
            </div>  
            <div className="row g-3 justify-content-around mb-3">
                <div className="col-9">
                    <label for="exampleFormControlTextarea1" className="form-label"><i className="fa-solid fa-message"></i> Additional Comments</label>
                    <textarea name="applicant_message" className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>  
            </div>  
            <div className="row g-3 justify-content-around mb-3">
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>  
            </div>  
        </form>
    )

}