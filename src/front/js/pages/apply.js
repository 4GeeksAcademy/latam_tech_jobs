import React, { useRef, useContext, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

export const Apply = () => {
  const form = useRef();
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [showModal, setShowModal] = useState(false);
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    actions.get_single_job(params.id);
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (sent) {
      navigate("/");
    } else {
      navigate("/apply");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_jop1cgf",
        "template_idqa88j",
        form.current,
        "xL0_Kaj6hkNyykj5i"
      )
      .then(
        (result) => {
          if (result) {
            setSent(true);
            handleOpenModal();
          } else {
            setSent(false);
            handleOpenModal();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="container-md d-flex flex-column justify-content-center border border-dark-subtle p-3 mt-3 bg-light rounded"
    >
      {/*Aqui inicia el modal*/}
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{sent ? `Success!` : `Error`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {sent ? (
              <p>
                Your application to the{" "}
                <strong>{store.single_job.job_title}</strong> job has been sent!
              </p>
            ) : (
              `There was a problem with your application, try again`
            )}
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
      <div className="row g-3 mb-3">
        <div className="col-12">
          <label for="inputPassword6" className="col-form-label">
            <i
              className="fa-solid fa-suitcase fa-xl ml-2"
              style={{ color: "#363B39" }}
            ></i>{" "}
            Resume/CV
          </label>
          <input
            type="file"
            className="form-control"
            aria-label="file example"
            required
          />
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-12">
          <label for="nameInput" className="col-form-label">
            <i
              className="fa-solid fa-user fa-xl ml-2"
              style={{ color: "#363B39" }}
            ></i>{" "}
            Full name
          </label>
          <input
            name="applicant_name"
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="John Doe"
            required
          />
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-12">
          <label for="emailInput" className="col-form-label">
            <i
              className="fa-solid fa-envelope fa-xl ml-2"
              style={{ color: "#363B39" }}
            ></i>{" "}
            Email
          </label>
          <input
            name="applicant_email"
            type="text"
            className="form-control"
            id="emailInput"
            placeholder="name@email.com"
            required
          />
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-12">
          <label for="phoneInput" className="col-form-label">
            <i
              className="fa-solid fa-phone fa-xl ml-2"
              style={{ color: "#363B39" }}
            ></i>{" "}
            Phone
          </label>
          <input
            name="applicant_phone"
            type="text"
            className="form-control"
            id="phoneInput"
            placeholder="000-000-0000"
            required
          />
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-12">
          <label for="companyInput" className="col-form-label">
            <i
              className="fa-solid fa-building fa-xl ml-2"
              style={{ color: "#363B39" }}
            ></i>{" "}
            Current Company
          </label>
          <input
            name="applicant_company"
            type="text"
            className="form-control"
            id="companyInput"
            placeholder="Company name"
            required
          />
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-12">
          <label for="exampleFormControlTextarea1" className="col-form-label">
            <i
              className="fa-solid fa-message fa-xl ml-1 ml-2"
              style={{ color: "#363B39" }}
            ></i>{" "}
            Additional Comments
          </label>
          <textarea
            name="applicant_message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn bg-success pt-2 pb-2"
            style={{ color: "white" }}
          >
            <strong>
              {isLoading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Submit"
              )}
            </strong>
          </button>
        </div>
      </div>
    </form>
  );
};
