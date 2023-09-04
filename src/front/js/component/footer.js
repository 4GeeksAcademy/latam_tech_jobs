import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../img/logo-latamtj.png";
import "../css/footer.css";

export const Footer = () => (
  <footer className="text-center text-lg-start bg-white text-muted">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
    <div className="container">
      <div className="row justify-content-start mt-4">
        <div className="col-md-4">
          <h5>
            <img
              src={logoFooter}
              alt="logo"
              style={{ width: "300px", height: "150px" }}
            />
          </h5>
          <p>
            Tech-Jobs Latin America is a remote job board for tech professionals in the
            region. We want to assist companies in finding the best talent and
            professionals in finding the best job opportunities in the region.
          </p>
        </div>
        <div className="col-md-2 mt-4">
          <h4 className="text-black my-3">Company</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="/about-us" className="text-black">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-black">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="text-black">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-black">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mt-4">
          <h4 className="text-black my-3">Job Seekers</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="/job-seekers" className="text-black">
                Find Jobs
              </Link>
            </li>
            <li>
              <Link to="/job-seekers" className="text-black">
                Post Resume
              </Link>
            </li>
            <li>
              <Link to="/job-seekers" className="text-black">
                Job Alerts
              </Link>
            </li>
            <li>
              <Link to="/job-seekers" className="text-black">
                Job Search Advice
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mt-4">
          <h4 className="text-black my-3">Connect</h4>
          <div className="d-flex gap-3">
            <a href="#">
              <i className="fab fa-facebook fa-2x text-black"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter fa-2x text-black"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin fa-2x text-black"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram fa-2x text-black"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube fa-2x text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <section className="p-4 text-center bg-light text-black">
      © 2023 Tech-Jobs Latin America
    </section>
  </footer>
);
