import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authContext";
import { GoogleButton } from "react-google-button";

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
    window.location.reload(false);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          {user?.displayName ? (
            <>
              <span className="mr-2">Hello, {user.displayName}</span>
              <button
                onClick={handleLogoutClick}
                className="btn btn-primary ml-2"
              >
                Sign Out
              </button>
            </>
          ) : (
            <GoogleButton onClick={googleSignIn} />
          )}
        </div>
      </div>
    </nav>
  );
};
