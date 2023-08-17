import React from "react";

export function SignUp(){
    return(
<div className="container-md">
    <form className="d-flex flex-column">
        <div className="d-flex">
            <div className="d-flex flex-column col-6 p-4">
                <div class="mb-3">
                    <label for="inputCompanyName" class="form-label"><i class="fa-regular fa-building"></i> Company Name</label>
                    <input type="text" class="form-control" id="inputCompanyName"/>
                </div>
                <div class="mb-3">
                    <label for="inputFullName" class="form-label"><i class="fa-solid fa-user"></i> Full Name</label>
                    <input type="text" class="form-control" id="inputFullName"/>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label"><i class="fa-solid fa-envelope"></i> Email</label>
                    <input type="text" class="form-control" id="inputEmail"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword" class="form-label"><i class="fa-solid fa-key"></i> Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label"><i class="fa-solid fa-key"></i> Repeat Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2"/>
                </div>
            </div>
            <div className="d-flex flex-column col-6 p-4">
                <div class="mb-3">
                    <label for="inputPhone" class="form-label"><i class="fa-solid fa-phone"></i> Telephone</label>
                    <input type="text" class="form-control" id="inputPhone"/>
                </div>
                <div className="mb-3">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select your country</option>
                        <option value="1">El Salvador</option>
                        <option value="2">Guatemala</option>
                        <option value="3">Costa Rica</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="inputAddress" class="form-label"><i class="fa-solid fa-location-dot"></i> Address</label>
                    <input type="text" class="form-control" id="inputAddress"/>
                </div>
                <div class="mb-3">
                    <label for="inputWebsite" class="form-label"><i class="fa-solid fa-cloud"></i> Website</label>
                    <input type="text" class="form-control" id="inputWebsite"/>
                </div>
                <div class="mb-3">
                    <label for="inputLinkedIn" class="form-label"><i class="fa-brands fa-linkedin"></i> LinkedIn</label>
                    <input type="text" class="form-control" id="inputLinkedIn"/>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column">
                <span class="input-group-text">Company Description</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
    )
}