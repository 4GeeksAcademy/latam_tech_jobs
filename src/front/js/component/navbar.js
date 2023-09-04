import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authContext";
import { GoogleButton } from "react-google-button";
import logoNavbar from "../../img/logo-latamtj2.png";
import "../css/navbar.css";

export const Navbar = () => {
  const { user, googleSignIn, googleSignOut } = useAuth();

  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogoutClick = async (e) => {
    e.preventDefault();

    if (user) {
      await googleSignOut();
    }

    actions.logout();
    alert("You were logged out successfully");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logoNavbar}
            alt="logo"
            style={{ width: "150px", height: "75px" }}
          />
        </Link>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Register
              </a>
            </li>
            <div className="d-flex align-items-center">
              {user?.displayName ? (
                <>
                  <span className="mx-2">Hello, {user.displayName}</span>
                  <button
                    onClick={handleLogoutClick}
                    className="btn btn-primary ml-2"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button onClick={googleSignIn} className="btn btn-primary">
                  Login
                </button>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
