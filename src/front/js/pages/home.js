import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(()=>{actions.get_jobs("")}, [])
	return (
		<div className="container-fluid">
			<div className="row justify-content-center mb-4">
				<div className="col-6 d-flex">
					<input class="form-control" type="text" value="Type job title here..." aria-label="readonly input example" readonly/>
				</div>
			</div>
			<div className="row justify-content-center mb-4">
				<div className="col-2 d-flex">
					<select class="form-select" aria-label="Default select example">
						<option selected>Select a country</option>
						<option value="1">Nicaragua</option>
						<option value="2">Guatemala</option>
						<option value="3">Colombia</option>
					</select>
				</div>
				<div className="col-2 d-flex flex-column">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
						<label class="form-check-label" for="flexCheckDefault">
							Remote
						</label>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
						<label class="form-check-label" for="flexCheckDefault">
							Onsite
						</label>
					</div>
				</div>
			</div>
			<div className="row justify-content-center mb-4">
				<div className="col-6 d-flex justify-content-center">
					<button type="button" class="btn btn-primary ms-3">Search</button>
				</div>
			</div>
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6">
					{
						store.jobs.map((job, id)=>(
					<div key={id} class="card text-center mb-3">
						<div class="card-header">
							{job.company_name}
						</div>
						<div class="card-body">
							<h5 class="card-title mb-4">{job.job_title}</h5>
							<div className="d-flex justify-content-around">
								<p><i class="fa-solid fa-wifi"></i> {job.job_type}</p>
								<p><i class="fa-solid fa-location-dot"></i> {job.company_country}</p>
								<p><i class="fa-solid fa-money-check-dollar"></i> USD {job.pay_rate}</p>
							</div>
							<p class="card-text">{job.job_description}</p>
							<Link to={`/apply/${job.id}`} class="btn btn-primary">Apply Now</Link>
						</div>
						<div class="card-footer text-body-secondary">
							<Link to={`/job`}>More information..</Link>
						</div>
					</div>
						))
					}
				</div>
				<div className="col-3"></div>
			</div>
		</div>
	);
};

