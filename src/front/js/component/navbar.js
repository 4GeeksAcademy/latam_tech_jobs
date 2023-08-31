import React from "react";
import { Link } from "react-router-dom";
import logo from "./logonav.png"


export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-light d-flex">
				<div className="container d-flex justify-content-between">
					<div>
						<Link to={'/'}>
							<img src={logo} className="img-fluid" alt="Nombre del Logo" style={{ width: "200px", height: "100px" }} />
						</Link>
					</div>
					<div className="d-flex align-items-center">
						<div className="ml-3 p-2">
							<Link to={'/login'} className="text-decoration-none text-black">
								<i className="fa-solid fa-right-to-bracket" style={{ color: "orange" }}></i>Login
							</Link>
						</div>
						<div className="ml-3 p-2">
							<Link to={'/signup'} className="text-decoration-none text-black">
								<i className="fa-solid fa-user-plus" style={{ color: "orange" }}></i>Sign-up
							</Link>
						</div>
						<div className="ml-3 p-2">
							<button type="button" className="btn btn-warning text-decoration-none" style={{ height: 40, color: "orange" }}>
								<Link to={'/post'} className="text-decoration-none">
									<p className="text-black">Post a job</p>
								</Link>
							</button>
						</div>
					</div>
				</div>
			</nav>

		</>
	);
};
