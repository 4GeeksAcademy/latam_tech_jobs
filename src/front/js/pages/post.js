import React, { useState } from "react";

export function Post() {
  const [questions, setQuestions] = useState([]); // Questions array
  const [selectedQuestion, setSelectedQuestion] = useState(""); // Selected question from dropdown
  const [selectedExperience, setSelectedExperience] = useState(""); // Selected experience level

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

    const formData = {
      jobTitle: e.target.jobTitle.value,
      jobDescription: e.target.jobDescription.value,
      skills: e.target.skills.value,
      jobType: e.target.jobType.value,
      payRate: e.target.payRate.value,
      experienceLevel: e.target.experienceLevel.value,
      questions: questions,
      companyName: e.target.companyName.value,
      companyWebsite: e.target.companyWebsite.value,
      companyCountry: e.target.companyCountry.value,
      companyState: e.target.companyState.value,
      companyCity: e.target.companyCity.value,
    };
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error posting job: ", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="h1-title d-flex justify-content-start mb-5">Post a Job</h1>

      {/* TELL US ABOUT YOUR JOB */}
      <h6>TELL US ABOUT YOUR JOB</h6>
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
      <h6>WHAT ARE THE JOB REQUIREMENTS?</h6>
      <form className="row g-3 mb-4">
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
      <h6 className="h6-title">WHAT DOES THIS JOB PAY?</h6>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="jobType" className="form-label">
            Job type
          </label>
          <select className="form-select" id="jobType">
            <option value="full_time">Full-time (40 hrs/wk)</option>
            <option value="part_time">Part-time (20 hrs/wk)</option>
            <option value="contract">Contract</option>
            <option value="project">Project</option>
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
        <div className="col-md-6">
          <label htmlFor="experienceLevel" className="form-label">
            Experience level required
          </label>
          <select
            className="form-select mb-5"
            id="experienceLevel"
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
}
