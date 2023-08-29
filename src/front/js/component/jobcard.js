import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Jobcard = () => {
    return (
        <div className="container">
            <div className="header text-center">
                <h1>Available Jobs: </h1>
            </div>
            <div className="card-deck d-flex justify-content-center container"  style={{width: 700}}>
                <div className="card">
                    <div className="card-title container">
                        <div className="row">
                            <span className="col-sm-2">
                                <h5 className=""><button type="button" class="btn"><strong>Job position</strong></button></h5>
                            </span>
                            <span className="col-sm-2" style={{marginTop: 10}}>
                                <h5 className="rounded-pill bg-primary form-control text-dark text-center">Full-time</h5>
                            </span>
                        </div>
                    </div>
                    <div className="card-body justify-content-start">
                        <div className="container">
                            <div className="row">
                                <span className="col-sm-4">
                                    <i class="fa-solid fa-building" style={{ color: "red" }}></i>
                                    <p>Company name</p>
                                </span>
                                <span className="col-sm-4">
                                    <i class="fa-solid fa-location-dot" style={{ color: "violet" }}></i>
                                    <p>Location</p>
                                </span>
                                <span className="col-sm-4">
                                    <i class="fa-solid fa-wifi" style={{ color: "blue" }}></i>
                                    <p>Type of job</p>
                                </span>
                                <span className="col-sm-4">
                                    <i class="fa-solid fa-dollar-sign" style={{ color: "#73ff00" }}></i>
                                    <p>Pay</p>
                                </span>
                            </div>
                        </div>
                        <div>
                            <h6>Description:</h6>
                            Are you a motivated and results-driven sales professional with a passion for helping businesses succeed? Do you thrive in a rem...
                        </div>

                    </div>
                    <div className="card-footer">
                        <span className="p-2">
                            <a className="rounded-pill p-2 btn border text-decoration-none" type="button" href="#"><Link to={'/job'} className="text-decoration-none">More info</Link></a>
                        </span>
                        <span className="p-2 text-decoration-none">
                            <a className="rounded-pill p-2 btn bordertext-decoration-none" type="button" href="#"><Link to={'/apply'} className="text-decoration-none">Apply Now!</Link></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}