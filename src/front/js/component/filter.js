import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Filter = () => {
    return (
        <div className="container">
            <div className="header text-left">
                <h1>Filters: </h1>
            </div>
            <div className="container d-flex" style={{ width: 100, marginLeft: -30 }}>
                <ul className="list-group border border-primary">
                    <li className="list-group-item border border-primary">
                        <h3><bold>Skills</bold></h3>
                        <input></input>
                    </li>
                    <li className="list-group-item border border-primary">
                        <h3 style={{ color: "violet" }}><bold>Location</bold></h3>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />Remote Job</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />On-site job</label>
                        </div>

                    </li>
                    <li className="list-group-item border border-primary">
                        <h3 style={{ color: "blue" }}><bold>Type of job</bold></h3>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />Full-time (40 hrs/wk)</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />part-time</label>
                        </div>
                    </li>
                    <li className="list-group-item border border-primary">
                        <h3 style={{ color: "#73ff00" }}><bold>Pay range</bold></h3>
                        <label><input type="checkbox" value="" />$10,000</label>
                        <label><input type="checkbox" value="" />$35,000</label>
                        <label><input type="checkbox" value="" />$60,000</label>
                        <label><input type="checkbox" value="" />$85,000</label>
                        <label><input type="checkbox" value="" />$110,000</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}