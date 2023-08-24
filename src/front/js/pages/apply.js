import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

export function Apply(){
    const form = useRef()
    const click = false

    const sendEmail = (e)=>{
        click = true
        e.preventDefault()
        emailjs.sendForm('service_jop1cgf', 'template_idqa88j', form.current, 'xL0_Kaj6hkNyykj5i')
        .then((result) => {
            console.log(result.text);
            alert('Your message was sent to the Hiring Manager')
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <form ref={form} onSubmit={sendEmail} className="container-md d-flex flex-column justify-content-center border border-dark-subtle p-4 mt-3 bg-light rounded">
            <div class="row g-3 justify-content-around mb-3">
                <div class="col-3">
                    <label for="inputPassword6" class="col-form-label"><i class="fa-solid fa-suitcase"></i> Resume/CV</label>
                </div>
                <div class="col-6">
                    <input type="file" class="form-control" aria-label="file example" required/>
                </div>
            </div>
            <div class="row g-3 justify-content-around  mb-3">
                <div class="col-3">
                    <label for="nameInput" class="col-form-label"><i class="fa-solid fa-user"></i> Full name</label>
                </div>
                <div class="col-6">
                    <input name="applicant_name" type="text" class="form-control" id="nameInput" placeholder="John Doe" required/>
                </div>
            </div>
            <div class="row g-3 justify-content-around mb-3">
                <div class="col-3">
                    <label for="emailInput" class="col-form-label"><i class="fa-solid fa-envelope"></i> Email</label>
                </div>
                <div class="col-6">
                    <input name="applicant_email" type="text" class="form-control" id="emailInput" placeholder="name@email.com" required/>
                </div>
            </div>
            <div class="row g-3 justify-content-around mb-3">
                <div class="col-3">
                    <label for="phoneInput" class="col-form-label"><i class="fa-solid fa-phone"></i> Phone</label>
                </div>
                <div class="col-6">
                    <input name="applicant_phone" type="text" class="form-control" id="phoneInput" placeholder="000-000-0000" required/>
                </div> 
            </div>   
            <div class="row g-3 justify-content-around mb-3">
                <div class="col-3">
                    <label for="companyInput" class="col-form-label"><i class="fa-solid fa-building"></i> Current Company</label>
                </div>
                <div class="col-6">
                    <input name="applicant_company" type="text" class="form-control" id="companyInput" placeholder="Company name" required/>
                </div>  
            </div>  
            <div class="row g-3 justify-content-around mb-3">
                <div class="col-9">
                    <label for="exampleFormControlTextarea1" class="form-label"><i class="fa-solid fa-message"></i> Additional Comments</label>
                    <textarea name="applicant_message" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>  
            </div>  
            <div class="row g-3 justify-content-around mb-3">
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>  
            </div>  
        </form>
    )

}