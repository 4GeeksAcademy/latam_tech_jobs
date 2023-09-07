import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authContext";
import { GoogleButton } from "react-google-button";
import logoNavbar from "../../img/newlogo-nav.png";
import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

export const Navbar = () => {
  const { user, googleSignIn, googleSignOut } = useAuth();

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleLogoutClick = async (e) => {
    e.preventDefault();

    if (user) {
      await googleSignOut();
    }

    actions.logout();
    alert("You were logged out successfully");
    navigate("/");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    actions.logout();
    setIsLogout(true);
    handleOpenModal();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light border-bottom">
      {/*Aqui inicia el modal*/}
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{isLogout ? `Success!` : `Error`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isLogout ? (
              <p>You have successfully loged out</p>
            ) : (
              `There was a problem with your appliacation, try again`
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
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logoNavbar}
            alt="logo"
            style={{ width: "180px", height: "90px" }}
          />
        </Link>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          className="navbar-toggler bg-success"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {store.user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">
                    Hello, {store.user.user_name}
                  </span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary mx-2">
                    <Link
                      to="/post"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Post Job
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-warning ml-2"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to={"/login"}>
                  <button className="btn btn-primary">Login</button>
                </Link>
              </li>
            )}
            {!store.user ? (
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Register
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
