import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function Job() {
  const {store, actions} = useContext(Context)
  const params = useParams()
  useEffect(()=>{actions.get_single_job(params.id)},[])
  const formData = {
    jobTitle: "Software Developer",
    jobDescription:
      "We are looking for an experienced software developer... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae urna nec augue maximus volutpat at vel urna. Morbi nec consectetur mauris. Aenean congue imperdiet bibendum. Cras bibendum sagittis congue. Praesent cursus ornare lorem, at gravida felis tincidunt a. Vestibulum venenatis elit eu ex tristique, ut aliquam turpis tristique. Aliquam non faucibus tortor. Sed luctus nibh in luctus tempor. Nulla tincidunt ut dolor non imperdiet. Sed lobortis sit amet elit iaculis elementum.",
    skills: "JavaScript, React, Node.js",
    jobType: "Full-time (40 hrs/wk)",
    payRate: 25,
    experienceLevel: "Mid-Level (3+ years of experience)",
    questions: [
      "Can you list a few related projects you've worked on in the past?",
      "What makes you stand out against other candidates?",
      "What is your favorite programming language and why?"
    ],
    companyName: "TechCo",
    companyWebsite: "https://www.techco.com",
    companyCity: "San Francisco",
    companyState: "CA",
    companyCountry: "USA",
  };

  return (
    <div className="container mt-5">
      <h1 className="h1-title d-flex justify-content-start mb-5">
        Job Post Preview
      </h1>

      <div className="border border-3 border-info rounded-3 p-4 mb-4">
        <h6>
          <i className="fas fa-file-alt"></i> Job Details
        </h6>
        <p>
          <strong>Job Title:</strong> {store.single_job.job_title}
        </p>
        <p>
          <strong>Job Description:</strong> {formData.jobDescription}
        </p>
        <p>
          <strong>Skills Required:</strong> {formData.skills}
        </p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="border border-3 border-info rounded-3 p-4 h-95 mb-4">
            <h6>
              <i className="fas fa-money-bill"></i> Job Payment Details
            </h6>
            <p>
              <strong>Job Type:</strong> {formData.jobType}
            </p>
            {formData.payRate && (
              <p>
                <strong>Pay Rate ($/hr):</strong> {formData.payRate}
              </p>
            )}
            <p>
              <strong>Experience Level Required:</strong>{" "}
              {formData.experienceLevel}
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border border-3 border-info rounded-3 p-4 h-90 mb-4">
            <h6>
              <i className="fas fa-building"></i> Company Details
            </h6>
            <p>
              <strong>Company Name:</strong> {formData.companyName}
            </p>
            <p>
              <strong>Company Website:</strong> {formData.companyWebsite}
            </p>
            <p>
              <strong>Company Location:</strong> {formData.companyCity},{" "}
              {formData.companyState}, {formData.companyCountry}
            </p>
          </div>
        </div>
      </div>

      <div className="border border-2 border-info rounded-3 p-4 mb-4">
        <h6>
          <i className="fas fa-user"></i> Candidate Questions
        </h6>
        {formData.questions.map((question, index) => (
          <p key={index}>
            <strong>Question {index + 1}:</strong> {question}
          </p>
        ))}
      </div>

      <div className="apply-button-container">
        <a href="#" className="btn btn-primary apply-button">
          Apply to this job
        </a>
      </div>
    </div>
  );
}
