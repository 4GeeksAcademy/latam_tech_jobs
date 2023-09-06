import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [minSal, setMinSal] = useState(0)
  const [maxSal, setMaxSal] = useState(0)
  const [type, setType] = useState(null)

  const getJobType = ()=>{
    setType(document.getElementsByName('job_type'))
    let value = null
    if (type){
      type.forEach(element => {
        if(element.checked){
          value = document.getElementById(element.id).value
        }
      });
    }
    return value
  }

useEffect(()=>{getJobType()},[])

  const filterClick = async ()=>{
    const jobType = getJobType()
    if (jobType){
     const data = await actions.get_jobs('?type=' + jobType)
     if(resp){
      console.log(data)
     } else {
      console.log('error en la llamada al api get_jobs')
     }
    }
    
  }

  useEffect(() => {
    actions.get_jobs("");
  }, []);
  return (
    <div className="container-fluid pb-5 pt-3 bg-body-secondary">
      <div className="row justify-content-center mb-4 mt-5">
        <div className="col-3"></div>
        <div className="col-6 d-flex">
          <input
            class="form-control"
            type="text"
            value="Type job title here..."
            aria-label="readonly input example"
            readonly
          />
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-6 d-flex justify-content-center">
          <button type="button" class="btn bg-success" style={{color: "#ff914d"}}>
            <strong className="p-5">Search</strong>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
{/*Filtro izquierdo empieza aqui*/ }
        <div className="row justify-content-center mb-5 mt-5 ">
          <div className="col-7 d-flex">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select a country</option>
              <option value="1">Nicaragua</option>
              <option value="2">Guatemala</option>
              <option value="3">Colombia</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-7 d-flex flex-wrap justify-content-around">
            <div class="form-check">
              <input value="full_time" class="form-check-input" type="radio" name="job_type" id="full"/>
              <label class="form-check-label" for="full">
                Fulltime
              </label>
            </div>
            <div class="form-check">
              <input value="part_time" class="form-check-input" type="radio" name="job_type" id="part" />
              <label class="form-check-label" for="part">
                Partime
              </label>
            </div>
            <div class="form-check">
              <input value="contract" class="form-check-input" type="radio" name="job_type" id="contract" />
              <label class="form-check-label" for="contract">
                Contract
              </label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5 mt-5 ">
          <div className="col-7 d-flex flex-wrap justify-content-around">
            <label for="customRange3" class="form-label">Min salary U${minSal}/hr</label>
            <input type="range" class="form-range" min="0" max="100" step="0.5" id="minSalary" onChange={()=>{setMinSal(document.getElementById("minSalary").value)}}/>
          </div>
        </div>
        <div className="row justify-content-center mb-5 mt-5">
          <div className="col-7 d-flex flex-wrap justify-content-around">
            <label for="customRange3" class="form-label">Max salary U${maxSal}/hr</label>
            <input type="range" class="form-range" min="0" max="100" step="0.5" id="maxSalary" onChange={()=>{setMaxSal(document.getElementById("maxSalary").value)}}/>
          </div>
        </div>
        <div className="row justify-content-center mb-5 mt-5">
          <div className="col-3 d-flex flex-wrap justify-content-around">
            <button type="button" class="btn bg-success" style={{color: "#ff914d"}}>
              <strong className="p-5" onClick={filterClick}>Apply</strong>
            </button>
          </div>
        </div>
{/*Fin del filtro izquierdo*/}
        </div>
        <div className="col-6">
          {store.jobs.map((job, id) => (
            <div key={id} className="card text-center mb-3">
              <div className="card-header">{job.company_name}</div>
              <div className="card-body">
                <h5 className="card-title mb-4">{job.job_title}</h5>
                <div className="d-flex justify-content-around">
                  <p>
                    <i class="fa-solid fa-calendar-check fa-xl" style={{color: "#ff914d"}}></i> {job.job_type}
                  </p>
                  <p>
                  <i class="fa-solid fa-location-dot fa-xl" style={{color: "#ff914d"}}></i>{" "}
                    {job.company_country}
                  </p>
                  <p>
                   <i class="fa-solid fa-money-check-dollar fa-xl" style={{color: "#ff914d"}}></i> USD{" "}
                    {job.pay_rate}
                  </p>
                </div>
                <p className="card-text">{job.job_description}</p>
                <Link to={`/apply/${job.id}`} class="btn bg-success pt-2 pb-2" style={{color: "#ff914d"}}>
                  <strong>Apply Now</strong>
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
