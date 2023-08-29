import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3 container-fluid">
				<div className="float-left p-2">
					<h1><a href="/" className="text-decoration-none text-black"><Link to={'/'}></Link>Latam Tech Jobs</a></h1>
				</div>
				<div>
					<img src="./logo.png" className="img-fluid" alt="Nombre del Logo" style={{paddingLeft: 200, height: 150}}/>
				</div>
				<div className="p-2">
				</div>
				<div className="row float-right text-decoration-none">
					<ul className="col-md nav navbar-nav navbar-right text-decoration-none float-left" style={{ paddingTop: 15 }}>
						<li><a href="#" className="text-decoration-none"><i class="fa-solid fa-right-to-bracket" style={{color: "orange"}}></i><Link to={'/login'} className="text-decoration-none text-black">Login</Link></a></li>
					</ul>
					<ul className="col-md nav navbar-nav navbar-right" style={{ paddingTop: 15 }}>
						<li><a href="#" className="text-decoration-none"><i class="fa-solid fa-user-plus" style={{color: "orange"}}></i><Link to={'/signup'} className="text-decoration-none text-black">Sing-up</Link></a></li>
					</ul>
					<ul className="col-md nav navbar-nav navbar-right p-2" style={{ width: 180 }}>
						<button type="button" className="btn btn-warning text-decoration-none" style={{ height: 40, color: "orange" }}><Link to={'/post'} className="text-decoration-none"><p className="text-black">Post a job</p></Link></button>
					</ul>
				</div>
			</nav>
		</>
	);
};
