import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<ul>
				<li><Link to={'/job'}>Job View</Link></li>
				<li><Link to={'/post'}>Post Form</Link></li>
				<li><Link to={'/login'}>Login Form</Link></li>
				<li><Link to={'/signup'}>SignUp Form</Link></li>
				<li><Link to={'/apply'}>Apply Form</Link></li>				
			</ul>
		</div>
	);
};
