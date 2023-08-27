import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const {actions} = useContext(Context)
	const navigate = useNavigate()
	const handleLogoutClick = (e)=>{
		e.preventDefault()
		actions.logout()
		alert("you were loged out successfully")
		navigate('/')
		window.location.reload(false);
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button onClick={handleLogoutClick} className="btn btn-primary">Sign out</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
