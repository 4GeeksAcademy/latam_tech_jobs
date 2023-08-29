import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3 container-fluid">
				<div className="float-left p-2">
					<h1><a href="/" className="text-decoration-none"><Link to={'/'}></Link>Latam Tech Jobs</a></h1>
				</div>				
				<div className="p-2">
				</div>
				<div className="row float-right text-decoration-none">
					<ul className="col-md nav navbar-nav navbar-right text-decoration-none float-left"  style={{paddingTop: 20}}>
						<li><a href="#" className="text-decoration-none"><i class="fa-solid fa-right-to-bracket"></i><Link to={'/login'} className="text-decoration-none">Login</Link></a></li>
					</ul>
					<ul className="col-md nav navbar-nav navbar-right"  style={{paddingTop: 20}}>
						<li><a href="#" className="text-decoration-none"><i class="fa-solid fa-user-plus"></i><Link to={'/signup'} className="text-decoration-none">Sing-up</Link></a></li>
					</ul>
					<ul className="col-md nav navbar-nav navbar-right p-2" style={{width: 180}}>
						<button type="button" className="btn btn-primary text-decoration-none" style={{height: 40}}><Link to={'/post'} className="text-decoration-none"><p className="text-white">Post a job</p></Link></button>
					</ul>
				</div>
			</nav>
		</>
	);
};
