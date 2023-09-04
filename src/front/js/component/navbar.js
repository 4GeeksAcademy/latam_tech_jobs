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
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hello, {user.displayName}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary mx-2">
                    <Link
                      to="/submitjob"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Post Job
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogoutClick}
                    className="btn btn-warning ml-2"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button onClick={googleSignIn} className="btn btn-success">
                  Login
                </button>
              </li>
            )}
            {!user && (
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
