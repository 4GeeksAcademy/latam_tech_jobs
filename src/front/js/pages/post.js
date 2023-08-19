import React from "react";

export function Post(){
    return (
        <div className="container mt-5">
          <h1 className="h1-title m-4">Post a Job</h1>
    
          {/* TELL US ABOUT YOUR JOB */}
          <h5>TELL US ABOUT YOUR JOB</h5>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="jobTitle" className="form-label">
                Job title *
              </label>
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                required
                placeholder="Enter job title"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="jobDescription" className="form-label">
                Enter the type of work you need done or job title you are hiring for
              </label>
              <textarea
                className="form-control"
                id="jobDescription"
                required
                placeholder="Describe your job"
              ></textarea>
            </div>
          </form>
    
          {/* WHAT ARE THE JOB REQUIREMENTS? */}
          <h5>WHAT ARE THE JOB REQUIREMENTS?</h5>
          <form className="row g-3">
            <div className="col-md-12">
              <label htmlFor="skills" className="form-label">
                Skills *
              </label>
              <input
                type="text"
                className="form-control"
                id="skills"
                required
                placeholder="Enter required skills"
              />
            </div>
          </form>
    
          {/* WHAT DOES THIS JOB PAY? */}
          <h5>WHAT DOES THIS JOB PAY?</h5>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="jobType" className="form-label">
                Job type
              </label>
              <select className="form-select" id="jobType">
                <option value="full_time">Full-time (40 hrs/wk)</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="payRate" className="form-label">
                Pay rate ($/hr) (optional)
              </label>
              <input
                type="number"
                className="form-control"
                id="payRate"
                placeholder="Enter the pay rate per hour ($ USD)"
              />
            </div>
          </form>
    
          {/* WHAT QUESTIONS DO YOU WANT TO ASK CANDIDATES? */}
          <h5>WHAT QUESTIONS DO YOU WANT TO ASK CANDIDATES?</h5>
          <form className="row g-3">
            <div className="col-md-12">
              <p>
                It’s recommended to ask at least three questions in order to ensure
                you receive quality applications.
              </p>
            </div>
            <div className="col-md-12">
              <label htmlFor="question1" className="form-label">
                Question 1 *
              </label>
              <textarea
                className="form-control"
                id="question1"
                rows="3"
                required
                placeholder="Why would you be a good fit for this position?"
              ></textarea>
            </div>
            <div className="col-md-12">
              <button type="button" className="btn btn-primary">
                Add another question
              </button>
            </div>
            <div className="col-md-12">
              <label htmlFor="selectQuestion" className="form-label">
                Select a question
              </label>
              <select className="form-select" id="selectQuestion">
                <option value="" disabled selected>
                  Select a question
                </option>
              </select>
            </div>
          </form>
    
          {/* TELL US A LITTLE ABOUT YOUR COMPANY */}
          <div className="mt-5">
            <h5 className="tell-us-title mt-6">
              TELL US A LITTLE ABOUT YOUR COMPANY
            </h5>
          </div>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="companyName" className="form-label">
                Company name *
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                required
                placeholder="Enter the name of the company"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="companyWebsite" className="form-label">
                Company website *
              </label>
              <input
                type="url"
                className="form-control"
                id="companyWebsite"
                required
                placeholder="Enter the company website URL"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="companyCountry" className="form-label">
                Company country *
              </label>
              <input
                type="text"
                className="form-control"
                id="companyCountry"
                required
                placeholder="Enter company country"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="companyState" className="form-label">
                Company state/region *
              </label>
              <input
                type="text"
                className="form-control"
                id="companyState"
                required
                placeholder="Enter company state/region"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="companyCity" className="form-label">
                Company city *
              </label>
              <input
                type="text"
                className="form-control"
                id="companyCity"
                required
                placeholder="Enter company city"
              />
            </div>
            <div className="col-md-12 mb-6">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    };
