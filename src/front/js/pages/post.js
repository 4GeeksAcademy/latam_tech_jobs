import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Post() {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [jobType, setJobType] = useState("full_time");
  const [payRate, setPayRate] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [customQuestion, setCustomQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyCountry, setCompanyCountry] = useState("");
  const [companyState, setCompanyState] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [posted, setPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const maxLength = 2000;

  const handleOpenModal = () => {
    setShowModal(true);
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (posted) {
      navigate("/");
    } else {
      navigate("/post");
    }
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handleCustomQuestionSubmit = (e) => {
    e.preventDefault();
    const customQuestion = e.target.customQuestion.value;
    if (customQuestion) {
      setQuestions([...questions, customQuestion]); // Add custom question
      e.target.reset(); // Clear the input field
    }
  };

  const addSelectedQuestion = () => {
    if (selectedQuestion && selectedQuestion !== "custom") {
      setQuestions([...questions, selectedQuestion]); // Add selected question
    }
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const job = {
      job_title: jobTitle,
      job_description: jobDescription,
      skills: skills,
      job_type: jobType,
      pay_rate: payRate,
      experience_level: selectedExperience,
      questions: questions,
      company_name: companyName,
      company_website: companyWebsite,
      company_country: companyCountry,
      company_state: companyState,
      company_city: companyCity,
    };
    console.log(job);
    try {
      const resp = await actions.submitJob(job);
      if (resp) {
        setPosted(true);
        handleOpenModal();
      } else {
        setPosted(false);
        handleOpenModal();
      }
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };

  const handleJobDescriptionChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      setJobDescription(inputValue);
    }
  };

  return (
    <div className="container mt-5">
      {/*Aqui inicia el modal*/}
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{posted ? `Success!` : `Error`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {posted
              ? `Your job was posted successfully!`
              : `There was a problem posting your job`}
            .
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/*Aqui termina el modal */}
      <h1 className="h1-title d-flex justify-content-start mb-5">Post a Job</h1>
      {/* TELL US ABOUT YOUR JOB */}
      <h6>TELL US ABOUT YOUR JOB</h6>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="jobTitle" className="form-label">
            Job title *
          </label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            name="jobTitle"
            required
            placeholder="Enter job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="row my-2 d-flex justify-content-start">
          <div className="col-md-12 ">
            <label htmlFor="jobDescription" className="form-label">
              Enter all the information and requirements for your position *
            </label>
            <textarea
              className="form-control"
              maxLength={2000}
              id="jobDescription"
              name="jobDescription"
              required
              placeholder="Describe your job"
              rows="8"
              value={jobDescription}
              onChange={(e) => {
                // Check if the input value exceeds the character limit
                if (e.target.value.length <= 2000) {
                  setJobDescription(e.target.value);
                }
              }}
            ></textarea>
            {/* Character count */}
            <small className="text-muted">
              {jobDescription.length}/2000 characters remaining
            </small>
          </div>
        </div>
      </form>
      {/* WHAT ARE THE JOB REQUIREMENTS? */}
      <h6>WHAT ARE THE SKILLS REQUIRED?</h6>
      <form className="row g-3 mb-4">
        <div className="col-md-12">
          <label htmlFor="skills" className="form-label">
            Skills *
          </label>
          <input
            type="text"
            className="form-control"
            id="skills"
            name="skills"
            required
            placeholder="Enter required skills Ex: React, CSS, JavaScript, Python, Flask etc."
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
      </form>
      {/* WHAT DOES THIS JOB PAY? */}
      <h6 className="h6-title">WHAT DOES THIS JOB PAY?</h6>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="jobType" className="form-label">
            Job type
          </label>
          <select
            className="form-select"
            id="jobType"
            name="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="full_time">Full-time (40 hrs/wk)</option>
            <option value="part_time">Part-time (20 hrs/wk)</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="payRate" className="form-label">
            Pay rate ($/per hour) *
          </label>
          <input
            type="number"
            className="form-control"
            id="payRate"
            name="payRate"
            placeholder="Enter the pay rate per hour ($ USD)"
            value={payRate}
            onChange={(e) => setPayRate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="experienceLevel" className="form-label">
            Experience level required
          </label>
          <select
            className="form-select mb-5"
            id="experienceLevel"
            name="experienceLevel"
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
          >
            <option value="" disabled>
              Select experience level
            </option>
            <option value="Junior">Junior (1+ years of experience)</option>
            <option value="Mid-Level">
              Mid-Level (3+ years of experience)
            </option>
            <option value="Senior">Senior (5+ years of experience)</option>
          </select>
        </div>
      </form>
      {/* WHAT QUESTIONS DO YOU WANT TO ASK CANDIDATES? */}
      <h6>WHAT QUESTIONS DO YOU WANT TO ASK CANDIDATES?</h6>
      <form className="row g-3">
        <div className="col-md-12">
          <label htmlFor="selectQuestion" className="form-label">
            Select a question
          </label>
          <select
            className="form-select"
            id="selectQuestion"
            value={selectedQuestion}
            onChange={(e) => setSelectedQuestion(e.target.value)}
          >
            <option value="" disabled>
              Select a question
            </option>
            <option value="Can you list a few related projects you've worked on in the past?">
              Can you list a few related projects you've worked on in the past?
            </option>
            <option value="Can you please share a few links that would allow us to see the quality of your work?">
              Can you please share a few links that would allow us to see the
              quality of your work?
            </option>
            <option value="What makes you stand out against other candidates?">
              What makes you stand out against other candidates?
            </option>
            <option value="custom">Custom Question</option>
          </select>
        </div>
        {selectedQuestion === "custom" && (
          <div className="col-md-12">
            <form onSubmit={handleCustomQuestionSubmit}>
              <label htmlFor="customQuestion" className="form-label">
                Custom Question
              </label>
              <textarea
                className="form-control"
                id="customQuestion"
                name="customQuestion"
                rows="2"
                placeholder="Enter your custom question"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
              ></textarea>
              <button type="submit" className="btn btn-primary mt-3">
                Add Custom Question
              </button>
            </form>
          </div>
        )}
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={addSelectedQuestion}
          >
            Add selected question
          </button>
        </div>
        {questions.map((question, index) => (
          <div className="col-md-12" key={index}>
            <label htmlFor={`question${index + 1}`} className="form-label">
              Question {index + 1} *
            </label>
            <textarea
              className="form-control"
              id={`question${index + 1}`}
              name={`question${index + 1}`}
              rows="3"
              value={question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              required
              placeholder="Enter your question"
            ></textarea>
          </div>
        ))}
      </form>
      {/* TELL US A LITTLE ABOUT YOUR COMPANY */}
      <div className="mt-5">
        <h6 className="tell-us-title mt-6">
          TELL US A LITTLE ABOUT YOUR COMPANY
        </h6>
      </div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="companyName" className="form-label">
            Company name *
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            required
            placeholder="Enter the name of the company"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="companyWebsite" className="form-label">
            Company website *
          </label>
          <input
            type="text"
            className="form-control"
            id="companyWebsite"
            name="companyWebsite"
            required
            placeholder="Enter the company website URL"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
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
            name="companyCountry"
            required
            placeholder="Enter company country"
            value={companyCountry}
            onChange={(e) => setCompanyCountry(e.target.value)}
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
            name="companyState"
            required
            placeholder="Enter company state/region"
            value={companyState}
            onChange={(e) => setCompanyState(e.target.value)}
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
            name="companyCity"
            required
            placeholder="Enter company city"
            value={companyCity}
            onChange={(e) => setCompanyCity(e.target.value)}
          />
        </div>
        <div className="col-md-12 mb-6">
          <button type="submit" className="btn btn-success">
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
