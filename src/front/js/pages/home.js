import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.get_jobs("");
  }, []);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mb-4">
        <div className="col-6 d-flex">
          <input
            class="form-control"
            type="text"
            value="Type job title here..."
            aria-label="readonly input example"
            readonly
          />
        </div>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-2 d-flex">
          <select className="form-select" aria-label="Default select example">
            <option selected>Select a country</option>
            <option value="1">Nicaragua</option>
            <option value="2">Guatemala</option>
            <option value="3">Colombia</option>
          </select>
        </div>
        <div className="col-2 d-flex flex-column">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remote
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Onsite
            </label>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-6 d-flex justify-content-center">
          <button type="button" class="btn btn-primary ms-3">
            Search
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          {store.jobs.map((job, id) => (
            <div key={id} className="card text-center mb-3">
              <div className="card-header">{job.company_name}</div>
              <div className="card-body">
                <h5 className="card-title mb-4">{job.job_title}</h5>
                <div className="d-flex justify-content-around">
                  <p>
                    <i className="fa-solid fa-wifi"></i> {job.job_type}
                  </p>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    {job.company_country}
                  </p>
                  <p>
                    <i className="fa-solid fa-money-check-dollar"></i> USD{" "}
                    {job.pay_rate}
                  </p>
                </div>
                <p className="card-text">{job.job_description}</p>
                <Link to={`/apply/${job.id}`} class="btn btn-primary">
                  Apply Now
                </Link>
              </div>
              <div className="card-footer text-body-secondary">
                <Link to={`/job/${job.id}`}>More information..</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};
