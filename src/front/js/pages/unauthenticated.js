import React from "react";
import { Link } from "react-router-dom";

export const Unauthenticated = ()=>{
    return (
        <div className="container-fluid">
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Login required</h4>
                <p>You need to login to view this page</p>
                <hr/>
                <Link to='/login'><p class="mb-0">Go to login page</p></Link>
            </div>
        </div>
    )
}