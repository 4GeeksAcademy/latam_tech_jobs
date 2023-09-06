import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [minSal, setMinSal] = useState(0)
  const [maxSal, setMaxSal] = useState(0)
  const [country, setCountry] = useState()
  const [type, setType] = useState(null)
  const [title, setTitle] = useState()
  const [isLoading, setIsLoading] = useState(false)

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

  const clearJobType = ()=>{
    const jobTypes = document.getElementsByName('job_type')
      jobTypes.forEach(element => {
          element.checked = false       
      });
  }

  const clearCountry = ()=> {  
    var dropDown = document.getElementById("countryDrop");  
    dropDown.selectedIndex = "";  
} 
useEffect(()=>{getJobType()},[])

  const filterClick = async ()=>{
    const jobType = getJobType()
    setIsLoading(true)
     if(jobType && minSal > 0 && maxSal > 0 && country && title){
      const data = await actions.get_jobs('?type=' + jobType + '&min=' + minSal + '&max=' + maxSal + '&country=' + country + '&title=' + title)
      console.log(data)
    } else if (jobType && minSal > 0 && maxSal > 0 && title){
      const data = await actions.get_jobs('?type=' + jobType + '&min=' + minSal + '&max=' + maxSal + '&title=' + title)
      console.log(data)
    } else if (minSal > 0 && maxSal > 0 && jobType && country){
      const data = await actions.get_jobs('?min=' + minSal + '&max=' + maxSal + '&type=' + jobType + "&country=" + country)
      console.log(data)       
     } else if (minSal > 0 && maxSal > 0 && title){
      const data = await actions.get_jobs('?min=' + minSal + '&max=' + maxSal + '&title=' + title)
      console.log(data)
     } else if (minSal > 0 && maxSal > 0 && jobType){
      const data = await actions.get_jobs('?min=' + minSal + '&max=' + maxSal + '&type=' + jobType)
      console.log(data) 
     } else if (minSal > 0 && maxSal > 0){
        const data = await actions.get_jobs('?min=' + minSal + '&max=' + maxSal)
        console.log(data)
    } else if (jobType && title){
      const data = await actions.get_jobs('?type=' + jobType + '&title=' + title)
      console.log(data)
    } else if (country && title){
      const data = await actions.get_jobs('?country=' + country + '&title=' + title)
      console.log(data)
    } else if (jobType){
     const data = await actions.get_jobs('?type=' + jobType)
     console.log(data)
    } else if(country){
      const data = await actions.get_jobs('?country=' + country)
      console.log(data)
    } else if(title){
      const data = await actions.get_jobs('?title=' + title)
      console.log(data)
    }
    setIsLoading(false)
  }

  const clearFilterClick = ()=>{
    setIsLoading(true)
    actions.get_jobs("")
    document.getElementById("titleInput").value = ""
    setMaxSal(0)
    setMinSal(0)
    clearJobType()
    clearCountry()
    setIsLoading(false)
  }

  useEffect(() => {
    actions.get_jobs("");
  }, []);
  return (
    <div className="container-fluid pb-5 pt-3 bg-body-secondary">
      <div className="row mb-4 mt-5">
        <div className="col-3"></div>
        <div className="col-6">
          <input onChange={()=>{setTitle(document.getElementById("titleInput").value)}} id="titleInput" type="text" class="form-control" placeholder="Type the job description here...." aria-label="Recipient's username" aria-describedby="button-addon2"/>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row mb-4">
        <div className="col-3"></div>
        <div className="col-6 d-flex justify-content-center">
          <button onClick={filterClick} type="button" class="btn btn-primary" style={{color: "white"}}>
              Search
          </button>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-3 border-end">
{/*Filtro izquierdo empieza aqui*/ }
        <div className="row justify-content-center mb-5 mt-5">
          <div className="col-7 d-flex">
            <select onChange={(e)=>{setCountry(e.target.value)}} className="form-select" aria-label="Default select example" id="countryDrop">
              <option value="" selected>Select a country</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Colombia">Colombia</option>
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
            <input value={minSal} type="range" class="form-range" min="0" max="100" step="0.5" id="minSalary" onChange={()=>{setMinSal(document.getElementById("minSalary").value)}}/>
          </div>
        </div>
        <div className="row justify-content-center mb-5 mt-5">
          <div className="col-7 d-flex flex-wrap justify-content-around">
            <label for="customRange3" class="form-label">Max salary U${maxSal}/hr</label>
            <input value={maxSal} type="range" class="form-range" min="0" max="100" step="0.5" id="maxSalary" onChange={()=>{setMaxSal(document.getElementById("maxSalary").value)}}/>
          </div>
        </div>
        <div className="row mb-5 mt-5 d-flex justify-content-center">
          <div className="col-5 d-flex flex-wrap justify-content-between">
            <div>
              <button onClick={filterClick} type="button" class="btn btn-light border">
                Apply
              </button>
            </div>
            <div>
              <button onClick={clearFilterClick} type="button" class="btn btn-light border">
                Clear
              </button>
            </div>            
          </div>
        </div>
{/*Fin del filtro izquierdo*/}
        </div>
        <div className="col-6">
          {store.jobs ? (
              store.jobs.map((job, id) => (
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
                    <p className="card-text">{job.job_description.length > 50 ? job.job_description.substring(0, 300) : job.job_description }....</p>
                    <Link to={`/apply/${job.id}`} class="btn btn-success pt-2 pb-2">
                      Apply Now
                    </Link>
                  </div>
                  <div className="card-footer text-body-secondary">
                    <Link to={`/job/${job.id}`}>More information..</Link>
                  </div>
                </div>
              ))
            ) : <h3>No matches found</h3>   
            
          }
           {isLoading ? (
          <div className="d-flex justify-content-center">
             <div class="spinner-grow text-success" role="status">
              <span class="visually-hidden">Loading...</span>          
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="visually-hidden">Loading...</span>          
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="visually-hidden">Loading...</span>          
            </div>
          </div>          
          ) : <></>}
        </div>
        <div className="col-3 border-start">
          <div></div>
        </div>
      </div>
    </div>
  );
};
