import React from "react";
import { Link } from "react-router-dom";

export const Unauthenticated = ()=>{
    return (
        <div className="container-fluid">
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Login required</h4>
                <p>You need to login to view this page</p>
                <hr/>
                <Link to='/login'><p className="mb-0">Go to login page</p></Link>
            </div>
        </div>
    )
}