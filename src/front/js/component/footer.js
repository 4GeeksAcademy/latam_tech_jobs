import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../img/logo-latamtj.png";

export const Footer = () => (
  <footer class="footer mt-4 text-bg-dark py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>
            <img
              src={logoFooter}
              alt="logo"
              style={{ width: "300px", height: "150px" }}
            />
          </h5>
          <p>
            Tech-Jobs Latin America is a job board for tech professionals in the
            region. We are a community of developers and tech enthusiasts who 
            want to help each other grow and succeed.
          </p>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h4 className="text-black my-3">Connect</h4>
          <div class="d-flex gap-3">
            <a href="#">
              <i class="fab fa-facebook fa-2x text-black"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter fa-2x text-black"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin fa-2x text-black"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram fa-2x text-black"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube fa-2x text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
